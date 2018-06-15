'use strict';

const TvShowController = require('../controllers/TvShowController');

module.exports = router => {
  /** READ All TV Shows */
  router.get('/api/shows', TvShowController.getAllShows);

  /** Create a TV Show */
  router.post('/api/shows', TvShowController.createShow);

  /** READ a TV Show */
  router.get('/api/shows/:id', TvShowController.getShow);

  /** Update a TV Show */
  router.put('/api/shows/:id', TvShowController.updateShow);

  /** DELETE a TV Show */
  router.delete('/api/shows/:id', TvShowController.deleteShow);

  /** Create a Season */
  router.post('/api/shows/:id/seasons', TvShowController.createSeason);

  /** READ show with latest season */
  router.get('/api/shows/:id/seasons/latest', TvShowController.getShowWithLatestSeason);

  /** READ a season */
  router.get('/api/shows/seasons/:seasonId', TvShowController.getSeason);

  /** UPDATE a season */
  router.put('/api/shows/seasons/:seasonId', TvShowController.updateSeason);

  /** DELETE a season */
  router.delete('/api/shows/seasons/:seasonId', TvShowController.deleteSeason);

  /** CREATE an episode */
  router.post('/api/shows/seasons/:seasonId/episodes', TvShowController.createEpisode);

  /** READ an episode */
  router.get('/api/shows/episodes/:episodeId', TvShowController.getEpisode);

  /** UPDATE an episode */
  router.put('/api/shows/episodes/:episodeId', TvShowController.updateEpisode);

  /** DELETE an episode */
  router.delete('/api/shows/episodes/:episodeId', TvShowController.deleteEpisode);

  /** Get Schedule */
  router.post('/api/schedule', TvShowController.getSchedule);
};
