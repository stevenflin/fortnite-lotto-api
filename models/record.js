const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Helpers
const PENDING = 'PENDING';
const WIN = 'WIN';
const LOSS = 'LOSS';
const fortyFiveMinutes = 45 * 60 * 1000;

const RecordSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  poolId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: [PENDING, WIN, LOSS],
    required: true,
    default: PENDING,
  },
  timeStart: {
    type: Date,
    required: true,
    default: Date.now,
  },
  timeEnd: {
    type: Date,
    required: true,
    default: Date.now() + fortyFiveMinutes,
  }
});

RecordSchema.index({ userId: 1, poolId: 1 }, { unique: true });

module.exports = mongoose.model('Record', RecordSchema);