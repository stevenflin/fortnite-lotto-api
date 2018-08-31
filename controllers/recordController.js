const express = require('express');
const router = express.Router();

const RecordRepository = require('../repositories/recordRepository');
const PoolRepository = require('../repositories/poolRepository');
const UserRepository = require('../repositories/userRepository');

router.post('/', async function(req, res) {
  let { record, entry } = req.body;
  await RecordRepository.create(record);
  await PoolRepository.incrementParticipantsByPoolId(record.poolId);
  await UserRepository.updateActivePoolsGamesPlayedAndBalanceByUserId(record.userId, entry);
  res.sendStatus(200);
});

module.exports = router;