const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(
  new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: "/api/auth/google/redirect",
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    User.findOrCreate({ googleId: profile.id }, (err, user) => {
      return done(err, user);
    });
  });
)
