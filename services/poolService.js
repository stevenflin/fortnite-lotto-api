const Service = require('./service');
const PoolRepository = require('../repositories/poolRepository');

class PoolService extends Service {
  constructor(poolRepository) {
    super(poolRepository);
  }
}

module.exports = new PoolService(PoolRepository);