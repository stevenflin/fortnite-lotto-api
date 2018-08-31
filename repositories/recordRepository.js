const Record = require('../models/record');
const Repository = require('./repository');

class RecordRepository extends Repository {
  constructor() {
    super('Record');
  }

  async findPoolIdsByUserId(userId) {
    let records = await this.collection.find({userId});
    let poolIds = records.map(record => record.poolId);
    return poolIds;
  }
}

module.exports = new RecordRepository();