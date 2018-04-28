const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config/config');

const Profile = require('../models/Profile');

module.exports = function (passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.jwtSecret;

  passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    const userProfile = await (Profile.query().findById(jwt_payload.userId));

    if (userProfile) {
      return done(null, userProfile);
    } else {
      return done(null, false);
    }
  }));
};
