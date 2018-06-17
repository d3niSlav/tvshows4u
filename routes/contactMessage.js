'use strict';

const passport = require('passport');
require('../middleware/passport')(passport);

const ContactMessageController = require('../controllers/ContactMessageController');

module.exports = router => {
  /** Create contact message */
  router.post('/api/contactMessages', ContactMessageController.createContactMessage);

  /** Get all contact messages */
  router.get('/api/contactMessages', passport.authenticate('jwt', { session: false }), ContactMessageController.getAllContactMessages);

  /** Get single contact message */
  router.get('/api/contactMessage/:id', passport.authenticate('jwt', { session: false }), ContactMessageController.getSingleContactMessage);

  /** Update contact message */
  router.put('/api/contactMessage/:id', passport.authenticate('jwt', { session: false }), ContactMessageController.updateContactMessage);

  /** Delete contact message */
  router.delete('/api/contactMessage/:id', passport.authenticate('jwt', { session: false }), ContactMessageController.deleteContactMessage);
};
