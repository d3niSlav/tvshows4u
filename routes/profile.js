'use strict';

const ProfileController = require('../controllers/ProfileController');

module.exports = router => {
  /** Add show to favourites */
  router.post('/api/profile/favourites/add', ProfileController.addShowToFavourites);

  /** Remove show from favourites */
  router.post('/api/profile/favourites/remove', ProfileController.removeShowFromFavourites);

  /** Get all favourite shows */
  router.get('/api/profile/favourites', ProfileController.getFavouriteShows);

 /** Get all watched shows */
  router.get('/api/profile/watchlist', ProfileController.getWatchedShows);

  /** Add show to watchlist */
  router.post('/api/profile/watchlist/add', ProfileController.addShowToWatchlist);

  /** Remove show from watchlist */
  router.post('/api/profile/watchlist/remove', ProfileController.removeShowFromWatchlist);

  /** Change show progress */
  router.put('/api/profile/watchlist/progress', ProfileController.changeShowProgress);
};
