const Service = require('./service');
const PoolRepository = require('../repositories/poolRepository');

class PoolService extends Service {
  constructor(poolRepository) {
    super(poolRepository);
  }

  incrementParticipantsByPoolId(poolId) {
    let updateQuery = { $inc : { participants: 1 } };
    return this.updateById(poolId, updateQuery);
  }
}

module.exports = new PoolService(PoolRepository);