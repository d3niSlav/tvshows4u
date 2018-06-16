const ProfileTvShow = require('../models/ProfileTvShow');
const TvShow = require('../models/TvShow');
const Profile = require('../models/Profile');

/** Get all shows data for a user profile */
const getShows = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const shows = await ProfileTvShow
    .query()
    .eager('[showData, showData.seasons, showData.seasons.episodes]')
    .where({ profileId: req.user.id });

  const showData = shows.map((show) => {
    const currentShow = show.showData[0];
    currentShow.seasons = currentShow.seasons.map((season) => {
      return {
        season: season.number,
        episodes: season.episodes.length
      };
    });

    delete show.profileId;
    delete show.showId;
    delete show.showData;

    return {
      ...show,
      ...currentShow
    };
  });

  return res.send(showData);
};

module.exports.getShows = getShows;

const addShowToFavourites = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (req.user && req.user.id) {
    let profileShowData = await ProfileTvShow.query().first().where({
      profileId: req.user.id,
      showId: req.body.showId
    });

    if (profileShowData) {
      profileShowData = await ProfileTvShow.query().first().patch({
        isFavourite: true
      }).where({
        profileId: req.user.id,
        showId: req.body.showId
      });
    } else {
      profileShowData = await ProfileTvShow.query().insert({
        profileId: req.user.id,
        showId: req.body.showId,
        isFavourite: true
      });
    }

    if (!profileShowData) {
      res.status(500).send({error: 'Something went wrong!'});
    }

    return res.send({ result: !!profileShowData });
  }

  return res.send({ result: false });
};

module.exports.addShowToFavourites = addShowToFavourites;

const removeShowFromFavourites = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (req.user && req.user.id) {
    const profileShowData = await ProfileTvShow.query().first().patch({
      isFavourite: false
    }).where({
      profileId: req.user.id,
      showId: req.body.showId
    });

    if (!profileShowData) {
      res.status(500).send({error: 'Something went wrong!'});
    }

    return res.send({ result: false });
  }

  return res.send({ result: false });
};

module.exports.removeShowFromFavourites = removeShowFromFavourites;

const addShowToWatchlist = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (req.user && req.user.id) {
    let profileShowData = await ProfileTvShow.query().first().where({
      profileId: req.user.id,
      showId: req.body.showId
    });

    if (profileShowData) {
      profileShowData = await ProfileTvShow.query().first().patch({
        ...profileShowData,
        isWatched: true
      }).where({
        profileId: req.user.id,
        showId: req.body.showId
      });
    } else {
      profileShowData = await ProfileTvShow.query().insert({
        profileId: req.user.id,
        showId: req.body.showId,
        isWatched : true
      });
    }

    if (!profileShowData) {
      res.status(500).send({error: 'Something went wrong!'});
    }

    return res.send({ result: !!profileShowData });
  }

  return res.send({ result: false });
};

module.exports.addShowToWatchlist = addShowToWatchlist;

const removeShowFromWatchlist = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (req.user && req.user.id) {
    const profileShowData = await ProfileTvShow.query().first().patch({
      isWatched: false
    }).where({
      profileId: req.user.id,
      showId: req.body.showId
    });

    if (!profileShowData) {
      res.status(500).send({error: 'Something went wrong!'});
    }

  return res.send({ result: false });
}

return res.send({ result: false });
};

module.exports.removeShowFromWatchlist = removeShowFromWatchlist;

const changeShowProgress = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const profileShowData = await ProfileTvShow.query().first().patch({
    seasonNumber: req.body.seasonNumber,
    episodeNumber: req.body.episodeNumber
  }).where({
    profileId: req.body.profileId,
    showId: req.body.showId
  });

  if (!profileShowData) {
    res.status(500).send({error: 'Something went wrong!'});
  }

  return res.send({message: 'Show\'s progress changed successfully!'});
};

module.exports.changeShowProgress = changeShowProgress;

const checkShowStatus = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let profileShowData = await ProfileTvShow.query().first().where({
    profileId: req.user.id,
    showId: req.params.showsId
  });

  if (!profileShowData) {
    profileShowData = {
      profileId: req.user.id,
      showId: req.params.showsId,
      seasonNumber: 1,
      episodeNumber: 1,
      isFavourite: 0,
      isWatched: 0
    };
  }

  return res.send(profileShowData);
};

module.exports.checkShowStatus = checkShowStatus;

const getFavouriteShows = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const favouriteShows = await ProfileTvShow.query().select('showId').where({
    profileId: 2,
    isFavourite: true
  });

  const showsIds = favouriteShows.map((show) => {
    return show.showId;
  });

  const shows = await TvShow.query().whereIn('id', showsIds);

  return res.send(shows);
};

module.exports.getFavouriteShows = getFavouriteShows;

const getWatchedShows = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const watchedShowsData = await ProfileTvShow
    .query()
    .select('showId', 'seasonNumber', 'episodeNumber')
    .where({
      profileId: 1,
      isWatched: true
    });

  const showsIds = [];
  const watchedShows = watchedShowsData.map((show) => {
    showsIds.push(show.showId);
    delete show.showId;
    return show;
  });

  const showsData = await TvShow
    .query()
    .select('title', 'status', 'plot', 'logo', 'poster', 'totalSeasons')
    .whereIn('id', showsIds);

  const shows = mergeObjectsFromArrays(showsData, watchedShows);

  return res.send(shows);
};

module.exports.getWatchedShows = getWatchedShows;

const mergeObjectsFromArrays = (firstArray, secondArray) => {
  let mergedArray = [];
  if (firstArray.length === secondArray.length) {
    for (let index = 0; index < firstArray.length; index++) {
      mergedArray.push({
        ...firstArray[index],
        ...secondArray[index]
      });
    }
  }

  return mergedArray;
};

const getProfile = async function (req, res) {
  return res.send(userProfile);
};

module.exports.getProfile = getProfile;