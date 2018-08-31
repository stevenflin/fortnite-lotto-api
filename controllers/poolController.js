const express = require('express');
const router = express.Router();

const PoolRepository = require('../repositories/poolRepository');

router.get('/', async function(req, res) {
	let pools = await PoolRepository.findAll();
	res.json({pools});
});

router.post('/', async function(req, res) {
	await PoolRepository.create(req.body.pool);
	res.sendStatus(200);
});

module.exports = router;