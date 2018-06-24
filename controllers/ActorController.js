const Actor = require('../models/Actor');
const TvShow = require('../models/TvShow');
const ActorTvShow = require('../models/ActorTvShow');

const createActor = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const actor = await Actor.query().insert(req.body);

  if (!actor) {
    return res.status(500).send({ error: 'Something went wrong!' });
  }

  return res.send(actor);
};

module.exports.createActor = createActor;


const getAllActors = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const actors = await Actor.query();

  if (!actors) {
    return res.status(500).send({ error: 'Something went wrong!' });
  }

  return res.send(actors);
};

module.exports.getAllActors = getAllActors;

const getSingleActor = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const actor = await Actor.query().findById(req.params.id);
  const actorShows = await ActorTvShow.query().where({
    actorId: req.params.id
  });
  const shows = await TvShow
    .query()
    .findByIds(actorShows.map(data => data.showId))
    .select('id', 'title', 'logo', 'poster');

  actor.shows = shows.map(show => {
    return {
      ...show,
      character: actorShows.find(connection => connection.showId === show.id).character
    }
  });

  if (!actor) {
    return res.status(404).send({ error: 'Actor not found!' });
  }

  return res.send(actor);
};

module.exports.getSingleActor = getSingleActor;

const updateActor = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const actor = await Actor.query().patchAndFetchById(req.params.id, req.body);

  if (!actor) {
    return res.status(404).send({ error: 'Actor with ID: ' + req.params.id + ' not found!' });
  }

  return res.send(actor);
};

module.exports.updateActor = updateActor;

const addActorToShow = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const actorShow = await ActorTvShow.query().insert(req.body);

  if (!actorShow) {
    return res.status(500).send({ error: 'Something went wrong!' });
  }

  return res.send(actorShow);
};

module.exports.addActorToShow = addActorToShow;

const removeActorFromShow = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const deletedRoles = await ActorTvShow.query().where({
    actorId: req.body.actorId,
    showId: req.body.showId
  }).del();

  if (deletedRoles <= 0) {
    return res.status(500).send({ error: 'Something went wrong!' });
  }

  return res.status(201).send();
};

module.exports.removeActorFromShow = removeActorFromShow;

const deleteActor = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const numberOfDeletedActors = await Actor.query().findById(req.params.id).del();

  if (numberOfDeletedActors <= 0) {
    return res.status(404).send({ error: 'Actor not found!' });
  }

  return res.status(201).send();
};

module.exports.deleteActor = deleteActor;
