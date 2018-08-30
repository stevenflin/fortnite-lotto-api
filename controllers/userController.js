const express = require('express');
const router = express.Router();

const UserRepository = require('../repositories/userRepository');

router.get('/', async function(req, res) {
	let users = await UserRepository.findAll();
	res.json({users});
});

router.get('/default', async function(req, res) {
	let activeUser = await UserRepository.findByField({field: 'name', value: 'Ninja'});
	res.json({activeUser});
});

module.exports = router;