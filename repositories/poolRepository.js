const Pool = require('../models/pool');
const Repository = require('./repository');

class PoolRepository extends Repository {
  constructor() {
    super('Pool');
  }
}

module.exports = new PoolRepository();