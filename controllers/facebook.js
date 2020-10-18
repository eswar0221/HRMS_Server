var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');

passport.use(new FacebookStrategy({
    clientID: "261487831654917",
    clientSecret: "747c6f5cb22eb2d0f850136943fb2f42",
    // callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
    callbackURL: "http://103.67.238.176:3000/api/"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

module.exports = passport;