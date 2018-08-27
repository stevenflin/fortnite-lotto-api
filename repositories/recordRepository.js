const Record = require('../models/record');
const Repository = require('./repository');

class RecordRepository extends Repository {
  constructor() {
    super('Record');
  }
}

module.exports = new RecordRepository();