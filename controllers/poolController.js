const express = require('express');
const router = express.Router();

const PoolRepository = require('../repositories/poolRepository');

router.get('/', function(req, res) {
	PoolRepository.findAll()
	.then(pools => res.json({pools}));
});

router.post('/', function(req, res) {
	PoolRepository.create(req.body.pool)
	.then(() => res.sendStatus(200));
});

module.exports = router;