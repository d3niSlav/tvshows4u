'use strict';

const ProfileController = require('../controllers/ProfileController');
const UserController = require('../controllers/UserController');
const passport = require('passport');
require('../middleware/passport')(passport);
const upload = require('../middleware/multerUpload')('src/assets/uploads/img/users/');

module.exports = router => {
  /** Get user profile */
  router.get('/api/profile', passport.authenticate('jwt', { session: false }), ProfileController.getProfile);

  /** Update user profile */
  router.put('/api/profile', passport.authenticate('jwt', { session: false }), ProfileController.updateProfile);

  /** Get user shows */
  router.get('/api/profile/shows', passport.authenticate('jwt', { session: false }), ProfileController.getShows);

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

  /** Get user e-mail address */
  router.get('/api/profile/email', passport.authenticate('jwt', { session: false }), UserController.getUserEmail);

  /** Update user e-mail address */
  router.put('/api/profile/email', passport.authenticate('jwt', { session: false }), UserController.changeUserEmail);

  /** Update user password */
  router.put('/api/profile/password', passport.authenticate('jwt', { session: false }), UserController.changePassword);

  /** Upload image */
  router.post('/api/profile/image', upload.single('avatar'), ProfileController.uploadImage);
};
