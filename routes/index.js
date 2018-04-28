"use strict";

const registerUserRoutes = require('./user');
const registerTvShowRoutes = require('./tv-show');

module.exports = router => {
  registerUserRoutes(router);
  registerTvShowRoutes(router);
};
