const express = require('express');
const router = express.Router();

const UserRepository = require('../repositories/userRepository');

router.get('/', function(req, res) {
	UserRepository.findAll()
	.then(users => res.json({users}));
});

router.get('/default', function(req, res) {
	UserRepository.findByField({field: 'name', value: 'Ninja'})
	.then(user => res.json({activeUser: user}));
});

module.exports = router;