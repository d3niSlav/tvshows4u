const { transaction } = require('objection');

const TvShow = require('../models/TvShow');
const Season = require('../models/Season');
const Episode = require('../models/Episode');

const knexfile = require('../knexfile');
const knex = require('knex')(knexfile.development);

/**--- All TV Shows ---**/

/* Read all TV Show */
const getAllShows = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let tvShows = await TvShow.query()
    .skipUndefined()
    .allowEager('[seasons]')
    .eager('seasons')
    // .where('age', '>=', req.query.minAge)
    // .where('age', '<', req.query.maxAge)
    // .where('firstName', 'like', req.query.firstName)
    .limit(req.query.limit)
    .orderBy(req.query.criteria, req.query.desc ? 'desc' : 'asc')
    .modifyEager('[seasons]', qb => qb.orderBy('number'));

  tvShows = tvShows.map(show => {
    show.seasons = show.seasons.map(season => {
      return {
        id: season.id,
        number: season.number
      };
    });

    return show;
  });

  return res.send(tvShows);
};

module.exports.getAllShows = getAllShows;


/**--- TV Shows ---**/

/* CREATE TV Show */
const createShow = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const tvShow = await transaction(TvShow.knex(), trx => {
    return (
      TvShow.query(trx)
        .allowInsert('[seasons, seasons.episodes]')
        .insertGraph(req.body)
    );
  });

  return res.send(tvShow);
};

module.exports.createShow = createShow;

/* READ TV Show */
const getShow = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let tvShow = await TvShow.query().findById(req.params.id).eager('seasons');

  if (!tvShow) {
    return res.status(404).send({ error: 'TV Show not found!' });
  }

  tvShow.seasons = tvShow.seasons.map(season => {
    return {
      id: season.id,
      number: season.number
    };
  });
  return res.send(tvShow);
};

module.exports.getShow = getShow;

/* UPDATE TV Show */
const updateShow = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const tvShow = await TvShow.query().patchAndFetchById(req.params.id, req.body).eager('seasons');

  if (!tvShow) {
    return res.status(404).send({ error: 'TV Show not found!' });
  }

  tvShow.seasons = tvShow.seasons.length;
  return res.send(tvShow);
};

module.exports.updateShow = updateShow;

/* DELETE TV Show */
const deleteShow = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const deletedCount = await TvShow.query().findById(req.params.id).eager('seasons').del();

  if (deletedCount === 0) {
    return res.status(404).send({ error: 'TV Show\'s not found!' });
  }

  return res.send({ success: 'TV Show successfully deleted!' });
};

module.exports.deleteShow = deleteShow;


/**--- SEASONS ---**/

/* CREATE Season */
const createSeason = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const tvShow = await TvShow.query().findById(req.params.id);

  if (!tvShow) {
    return res.status(404).send({ error: 'TV Show not found!' });
  }

  const season = await tvShow.$relatedQuery('seasons')
    .allowInsert('[episodes]')
    .insertGraph(req.body);

  return res.send(season);
};

module.exports.createSeason = createSeason;

/* READ Show with latest season */
const getShowWithLatestSeason = async function (req, res) {
  // res.setHeader('Content-Type', 'application/json');
  let tvShow = await TvShow.query()
    .findById(req.params.id)
    .join('seasons', 'shows.id', '=', 'seasons.showId');

  if (!tvShow) {
    return res.status(404).send({ error: 'TV Show not found!' });
  }

  return res.send(tvShow);
};

module.exports.getShowWithLatestSeason = getShowWithLatestSeason;

/* READ Season */
const getSeason = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const season = await Season.query().findById(req.params.seasonId).eager('episodes');

  if (!season) {
    return res.status(404).send({ error: 'TV Show\'s season not found!' });
  }

  return res.send(season);
};

module.exports.getSeason = getSeason;

/* UPDATE Season */
const updateSeason = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const updatedSeason = await Season.query().patchAndFetchById(req.params.seasonId, req.body).eager('episodes');

  if (!updatedSeason) {
    return res.status(404).send({ error: 'TV Show\'s season not found!' });
  }

  return res.send(updatedSeason);
};

module.exports.updateSeason = updateSeason;

/* DELETE Season */
const deleteSeason = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const deletedCount = await Season.query().findById(req.params.seasonId).eager('episodes').del();

  if (deletedCount === 0) {
    return res.status(404).send({ error: 'TV Show\'s season not found!' });
  }

  return res.send({ success: 'Season successfully deleted!' });
};

module.exports.deleteSeason = deleteSeason;


/**--- EPISODES ---**/

/* CREATE Episode */
const createEpisode = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const season = await Season.query().findById(req.params.seasonId);

  if (!season) {
    return res.status(404).send({ error: 'Season not found!' });
  }

  const episode = await season.$relatedQuery('episodes').insert(req.body);
  return res.send(episode);
};

module.exports.createEpisode = createEpisode;

/* READ Episode */
const getEpisode = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const episode = await Episode.query().findById(req.params.episodeId);

  if (!episode) {
    return res.status(404).send({ error: 'TV Show\'s episode not found!' });
  }

  return res.send(episode);
};

module.exports.getEpisode = getEpisode;

/* UPDATE Episode */
const updateEpisode = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const updatedEpisode = await Episode.query().patchAndFetchById(req.params.episodeId, req.body);

  if (!updatedEpisode) {
    return res.status(404).send({ error: 'TV Show\'s episode not found!' });
  }

  return res.send(updatedEpisode);
};

module.exports.updateEpisode = updateEpisode;

/* DELETE Episode */
const deleteEpisode = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const deletedCount = await Episode.query().findById(req.params.episodeId).del();

  if (deletedCount === 0) {
    return res.status(404).send({ error: 'TV Show\'s episode not found!' });
  }

  return res.send({ success: 'Episode successfully deleted!' });
};

module.exports.deleteEpisode = deleteEpisode;

/** */
const getSchedule = async function (req, res) {
  // res.setHeader('Content-Type', 'application/json');
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  const episodesData = await knex.raw(`
    SELECT
      shows.id,
      shows.logo,
      shows.title,
      seasons.number as seasonNumber,
      episodes.number as episodeNumber,
      episodes.releaseDate as releaseDate
    FROM 
      shows,
      seasons,
      episodes
    WHERE
      seasons.id = episodes.seasonId 
    AND
      seasons.showId = shows.id
    AND 
      episodes.releaseDate >= '${startDate}'
    AND
      episodes.releaseDate <= '${endDate}'
  `);

  return res.send(getDays(startDate, episodesData[0]));
};

module.exports.getSchedule = getSchedule;

/** Helper functions */
const getDays = (startDate, shows) => {
  let daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const nextDay = new Date(startDate);

  daysInWeek = daysInWeek.map((day) => {
    const currentDate = getDateString(nextDay);
    const currentShows = shows.filter((show) => {
      return (new Date(show.releaseDate)).toLocaleDateString() === nextDay.toLocaleDateString();
    });
    nextDay.setDate(nextDay.getDate() + 1);

    return {
      name: day,
      date: currentDate,
      shows: currentShows
    };
  });

  return daysInWeek;
};

const getDateString = (date) => {
  return date.toLocaleDateString("en-au", {year: "numeric", month: "short", day: "numeric"}).replace(/\./g, '');
};