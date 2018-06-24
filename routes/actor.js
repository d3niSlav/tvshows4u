'use strict';

const ActorController = require('../controllers/ActorController');

module.exports = router => {
  /** Create an actor */
  router.post('/api/actors', ActorController.createActor);

  /** Get all actors */
  router.get('/api/actors', ActorController.getAllActors);

  /** Get actor */
  router.get('/api/actor/:id', ActorController.getSingleActor);

  /** Add actor to a show */
  router.post('/api/actor/add-show', ActorController.addActorToShow);

  /** Remove actor from a show */
  router.delete('/api/actor/remove-show', ActorController.removeActorFromShow);

  /** Update actor */
  router.put('/api/actor/:id', ActorController.updateActor);


  /** Remove actor */
  router.delete('/api/actor/:id', ActorController.deleteActor);
};
