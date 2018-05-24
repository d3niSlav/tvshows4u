const ProfileTvShow = require('../models/ProfileTvShow');
const TvShow = require('../models/TvShow');
const Profile = require('../models/Profile');
// const Episode = require('../models/Episode');

/**
 * Create a new TV Show. Because we use `insertGraph` you can pass relations
 * with the season and they also get inserted and related to the show.
 */
const addShowToFavourites = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let profileShowData = await ProfileTvShow.query().first().where({
    profileId: req.body.profileId,
    showId: req.body.showId
  });

  if (profileShowData) {
    profileShowData = await ProfileTvShow.query().first().update({
      isFavourite: true
    }).where({
      profileId: req.body.profileId,
      showId: req.body.showId
    });
  } else {
    profileShowData = await ProfileTvShow.query().insert({
      ...req.body,
      isFavourite: true
    });
  }

  if (!profileShowData) {
    res.status(500).send({error: 'Something went wrong!'});
  }

  return res.send({message: 'Show added successfully to favourites!'});
};

module.exports.addShowToFavourites = addShowToFavourites;

const removeShowFromFavourites = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const profileShowData = await ProfileTvShow.query().first().update({
    isFavourite: false
  }).where({
    profileId: req.body.profileId,
    showId: req.body.showId
  });

  if (!profileShowData) {
    res.status(500).send({error: 'Something went wrong!'});
  }

  return res.send({message: 'Show removed successfully from favourites!'});
};

module.exports.removeShowFromFavourites = removeShowFromFavourites;

const addShowToWatchlist = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let profileShowData = await ProfileTvShow.query().first().where({
    profileId: req.body.profileId,
    showId: req.body.showId
  });

  if (profileShowData) {
    profileShowData = await ProfileTvShow.query().first().update({
      isWatched: true
    }).where({
      profileId: req.body.profileId,
      showId: req.body.showId
    });
  } else {
    profileShowData = await ProfileTvShow.query().insert({
      ...req.body,
      isWatched: true
    });
  }

  if (!profileShowData) {
    res.status(500).send({error: 'Something went wrong!'});
  }

  return res.send({message: 'Show added successfully to watchlist!'});
};

module.exports.addShowToWatchlist = addShowToWatchlist;

const removeShowFromWatchlist = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const profileShowData = await ProfileTvShow.query().first().update({
    isWatched: false
  }).where({
    profileId: req.body.profileId,
    showId: req.body.showId
  });

  if (!profileShowData) {
    res.status(500).send({error: 'Something went wrong!'});
  }

  return res.send({message: 'Show removed successfully from favourites!'});
};

module.exports.removeShowFromWatchlist = removeShowFromWatchlist;

const changeShowProgress = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const profileShowData = await ProfileTvShow.query().first().update({
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