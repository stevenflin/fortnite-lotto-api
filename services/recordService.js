const Service = require('./service');
const RecordRepository = require('../repositories/recordRepository');

class RecordService extends Service {
  constructor(recordRepository) {
    super(recordRepository);
  }
}

module.exports = new RecordService(RecordRepository);