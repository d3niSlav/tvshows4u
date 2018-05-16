"use strict";

const registerUserRoutes = require('./user');
const registerTvShowRoutes = require('./tv-show');
const registerProfileRoutes = require('./profile');

module.exports = router => {
  registerUserRoutes(router);
  registerTvShowRoutes(router);
  registerProfileRoutes(router);
};
