'use strict';

const TvShowController = require('../controllers/TvShowController');

module.exports = router => {
  /** Create Show */
  router.post('/api/shows', TvShowController.createShow);

  /** READ Shows */
  router.get('/api/shows', TvShowController.getAllShows);

  /** Create new Season to a TV Show */
  router.post('/api/shows/:id/seasons', TvShowController.createSeason);

  /** READ a Show by ID */
  router.get('/api/shows/:id', TvShowController.getShow);

  /** Update a Show by ID */
  router.put('/api/shows/:id', TvShowController.updateShow);
};
