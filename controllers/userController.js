const express = require('express');
const router = express.Router();

const UserRepository = require('../repositories/userRepository');
const RecordRepository = require('../repositories/recordRepository');
const PoolRepository = require('../repositories/poolRepository');

router.get('/', async function(req, res) {
	let users = await UserRepository.findAll();
	res.json({users});
});

router.get('/default', async function(req, res) {
	let activeUser = await UserRepository.findOne({name: 'Ninja'});
	res.json({activeUser});
});

router.get('/:userId/pools', async function(req, res) {
	let poolIds = await RecordRepository.findPoolIdsByUserId(req.params.userId);
	let pools = await PoolRepository.findByIds(poolIds);
	res.json({pools});
});

module.exports = router;