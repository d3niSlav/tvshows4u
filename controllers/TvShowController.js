const { transaction } = require('objection');

const TvShow = require('../models/TvShow');
// const Season = require('../models/Season');
// const Episode = require('../models/Episode');

/**
 * Create a new TV Show. Because we use `insertGraph` you can pass relations
 * with the season and they also get inserted and related to the show.
 */
const createShow = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const graph = req.body;
  const insertedGraph = await transaction(TvShow.knex(), trx => {
    return (
      TvShow.query(trx)
        .allowInsert('[seasons]')
        .insertGraph(graph)
    );
  });

  return res.send(insertedGraph);
};

module.exports.createShow = createShow;

const createSeason = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const tvShow = await TvShow.query().findById(req.params.id);

  if (!tvShow) {
    return res.status(404).send({ error: 'TV Show not found!' })
  }

  const season = await tvShow.$relatedQuery('seasons').insert(req.body);

  return res.send(season);
};

module.exports.createSeason = createSeason;

const getAllShows = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const tvShows = await TvShow.query()
    .skipUndefined()
    // For security reasons, limit the relations that can be fetched.
    .allowEager('[seasons]')
    .eager(req.query.eager)
    // .where('age', '>=', req.query.minAge)
    // .where('age', '<', req.query.maxAge)
    // .where('firstName', 'like', req.query.firstName)
    .orderBy(req.query.criteria)
    .modifyEager('[seasons]', qb => qb.orderBy('number'));

  return res.send(tvShows);
};

module.exports.getAllShows = getAllShows;

const getShow = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const tvShow = await TvShow.query().findById(req.params.id);

  if (!tvShow) {
    return res.status(404).send({ error: 'TV Show not found!' })
  }

  return res.send(tvShow);
};

module.exports.getShow = getShow;

const updateShow = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const tvShow = await Show.query().patchAndFetchById(req.params.id, req.body);

  return res.send(tvShow);
};

module.exports.updateShow = updateShow;

const removeShow = async function (req, res) {
  await User.query().findById(req.user.id).del();
  return res.status(201).send();
};

module.exports.removeShow = removeShow;
