const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PoolSchema = new Schema({
	name: String,
	entry: Number,
	participants: [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model('Pool', PoolSchema);