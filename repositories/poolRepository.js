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
}

module.exports = new PoolRepository();