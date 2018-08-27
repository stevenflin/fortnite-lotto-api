const express = require('express');
const router = express.Router();

const UserService = require('../services/userService');

router.get('/', async function(req, res) {
	let users = await UserService.findAll();
	res.json({users});
});

router.get('/default', async function(req, res) {
	let activeUser = await UserService.findByField({field: 'name', value: 'Ninja'});
	res.json({activeUser});
});

module.exports = router;