const express = require('express');
const router = express.Router();
const Users = require('../models/user');

router.get('/', function(req, res) {
  Users.find({}, (err, users) => {
  	res.json({users});
  });
});

router.get('/default', function(req, res) {
	Users.findOne({name: 'Ninja'}, (err, user) => {
		res.json({activeUser: user});
	});
});

module.exports = router;