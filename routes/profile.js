'use strict';

const ProfileController = require('../controllers/ProfileController');
const passport = require('passport');
require('../middleware/passport')(passport);

module.exports = router => {
  router.get('/api/profile', passport.authenticate('jwt', { session: false }), ProfileController.getProfile);

  /** Add show to favourites */
  router.post('/api/profile/favourites/add', passport.authenticate('jwt', { session: false }), ProfileController.addShowToFavourites);

  /** Remove show from favourites */
  router.post('/api/profile/favourites/remove', passport.authenticate('jwt', { session: false }), ProfileController.removeShowFromFavourites);

  /** Get all favourite shows */
  router.get('/api/profile/favourites', ProfileController.getFavouriteShows);

 /** Get all watched shows */
  router.get('/api/profile/watchlist', ProfileController.getWatchedShows);

  /** Add show to watchlist */
  router.post('/api/profile/watchlist/add', passport.authenticate('jwt', { session: false }), ProfileController.addShowToWatchlist);

  /** Remove show from watchlist */
  router.post('/api/profile/watchlist/remove', passport.authenticate('jwt', { session: false }), ProfileController.removeShowFromWatchlist);

  /** Change show progress */
  router.put('/api/profile/watchlist/progress', ProfileController.changeShowProgress);

  /** Get show favourite/watched status */
  router.get('/api/profile/checkShow/:showsId', passport.authenticate('jwt', { session: false }), ProfileController.checkShowStatus);
};
