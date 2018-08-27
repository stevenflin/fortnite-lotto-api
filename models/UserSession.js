const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
  userId: {
    type: Number,
    default: -1
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },

})

module.exports = mongoose.model('UserSession', UserSessionSchema);
