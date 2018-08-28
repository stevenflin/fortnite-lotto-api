const express = require('express');
const router = express.Router();

const RecordService = require('../services/recordService');
const UserService = require('../services/userService');
const PoolService = require('../services/poolService');

router.post('/', async function(req, res) {
  await RecordService.create(req.body.record);
  await UserService.incrementActivePoolsByUserId(req.body.record.userId);
  await PoolService.incrementParticipantsByPoolId(req.body.record.poolId);
  res.sendStatus(200);
});

module.exports = router;