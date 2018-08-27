const express = require('express');
const router = express.Router();

const PoolService = require('../services/poolService');

router.get('/', async function(req, res) {
	let pools = await PoolService.findAll();
	res.json({pools});
});

router.post('/', async function(req, res) {
	await PoolService.create(req.body.pool);
	res.sendStatus(200);
});

module.exports = router;