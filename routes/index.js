"use strict";

const registerUserRoutes = require('./user');
const registerTvShowRoutes = require('./tv-show');
const registerProfileRoutes = require('./profile');
const registerCommentRoutes = require('./comment');
const registerContactMessageRoutes = require('./contactMessage');

module.exports = router => {
  registerUserRoutes(router);
  registerTvShowRoutes(router);
  registerProfileRoutes(router);
  registerCommentRoutes(router);
  registerContactMessageRoutes(router);
};
