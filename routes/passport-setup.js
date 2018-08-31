const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById((id, done) => {
    done(null, user);
  })
});

passport.use(
  new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: "/api/auth/google/redirect",
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    User.findOne({ googleId: profile.id })
    .then((currentUser) => {
      if (currentUser) {
        console.log('The current user is:', currentUser);
        done(null, currentUser);
      }
      else {
        new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        })
        .save()
        .then((newUser) => {
          console.log('New User Created: ', newUser);
          done(null, newUser);
        })
      }
    })
  })
)
