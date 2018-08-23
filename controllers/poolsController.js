const express = require('express');
const router = express.Router();
const Pool = require('../models/pool');

router.get('/', function(req, res) {
  Pool.find({}, (err, pools) => {
  	res.json({pools});
  });
});

module.exports = router;