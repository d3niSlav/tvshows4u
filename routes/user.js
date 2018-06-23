'use strict';

const passport = require('passport');
require('../middleware/passport')(passport);

const UserController = require('../controllers/UserController');

module.exports = router => {
  /** CREATE User */
  router.post('/api/users', UserController.create);

  /** READ User */
  router.get('/api/users', passport.authenticate('jwt', { session: false }), UserController.get);

  /** UPDATE User */
  router.put('/api/users', passport.authenticate('jwt', { session: false }), UserController.update);

  /** DELETE User */
  router.delete('/api/users', passport.authenticate('jwt', { session: false }), UserController.remove);

  /** READ Administration */
  router.get('/api/users/administration', passport.authenticate('jwt', { session: false }), UserController.getAdministration);

  /** READ All web users */
  router.get('/api/users/web', passport.authenticate('jwt', { session: false }), UserController.getWebUsers);

  /** LOGIN User */
  router.post('/api/users/login', UserController.login);

  /** Request forgotten password */
  router.post('/api/forgottenPassword', UserController.requestForgottenPassword);

  /** Update forgotten password */
  router.post('/api/updatePassword/:token', UserController.updateForgottenPassword);
};
