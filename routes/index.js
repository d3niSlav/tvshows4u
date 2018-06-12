"use strict";

const registerUserRoutes = require('./user');
const registerTvShowRoutes = require('./tv-show');
const registerProfileRoutes = require('./profile');
const registerCommentRoutes = require('./comment');

module.exports = router => {
  registerUserRoutes(router);
  registerTvShowRoutes(router);
  registerProfileRoutes(router);
  registerCommentRoutes(router);
};
