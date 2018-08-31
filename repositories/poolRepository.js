const mongoose = require('mongoose');
const Pool = require('../models/pool');
const Repository = require('./repository');

class PoolRepository extends Repository {
  constructor() {
    super('Pool');
  }

  incrementParticipantsByPoolId(poolId) {
    let updateQuery = { $inc : { participants: 1 } };
    return this.updateById(poolId, updateQuery);
  }

  findByIds(poolIds) {
    let findQuery = {
      _id: {
        $in: poolIds.map(poolId => mongoose.Types.ObjectId(poolId))
      }
    }
    return this.find(findQuery);
  }
}

module.exports = new PoolRepository();