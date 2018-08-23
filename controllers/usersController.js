const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', function(req, res) {
  User.find({}, (err, users) => {
  	res.json({users});
  });
});

module.exports = router;