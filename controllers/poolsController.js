const express = require('express');
const router = express.Router();
const Pools = require('../models/pool');

router.get('/', function(req, res) {
  Pools.find({}, (err, pools) => {
  	res.json({pools});
  });
});

router.post('/', function(req, res) {
	Pools.create(req.body.pool, function (err, small) {
		res.sendStatus(200);  
	});
});

module.exports = router;