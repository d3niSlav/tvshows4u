"use strict";

const registerUserRoutes = require('./user');
const registerTvShowRoutes = require('./tv-show');
const registerProfileRoutes = require('./profile');
const registerCommentRoutes = require('./comment');
const registerContactMessageRoutes = require('./contactMessage');
const registerActorsRoutes = require('./actor');

module.exports = router => {
  registerUserRoutes(router);
  registerTvShowRoutes(router);
  registerProfileRoutes(router);
  registerCommentRoutes(router);
  registerContactMessageRoutes(router);
  registerActorsRoutes(router);
};
