const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// registering new user
router.post('/register', (req, res) => {
  let { name, email, password, passwordconfirm } = req.body;
  if (password === passwordconfirm) {
    if (password && name && email) {
      bcrypt.hash(password, saltRounds).then(function(hash){

        console.log('Hash is:', hash);

        email = email.toLowerCase();

        User.find({ email: email }, (err, previousUser) => {
          console.log('Previous User is: ', previousUser);
          if (err) {
            res.json({
              error: 'Server error.'
            });
          }
          else if (previousUser.length > 0) {
            res.json({
              error: 'Account already exists.'
            });
            res.end();
          }
          else {
            const newUser = new User ({
              name: name,
              email: email,
              password: hash
            });
            newUser.save().then((user) => {
              if (!user) {
                res.status(500).json({
                  error: 'Failed to save user.'
                });
              }
              else {
                res.status(200).json({
                  success: true
                });
              }
            })
            .catch((err) => {
              console.log('Error: ', err);
            })
          }
        })
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    }
  }
  else {
    res.json({
      error: 'Passwords must match.'
    });
  }
});

// auth login
router.get('/login', (req, res) => {
  res.send('Logging In!');
});

// auth logout
router.get('/logout', (req, res) => {
  res.send('Logging Out!');
});

// auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// auth callback for google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('Successfully authorized with Google OAuth :)');
});

module.exports = router;
