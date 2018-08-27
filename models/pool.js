const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PoolSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	entry: {
		type: Number,
		enum: [1, 10, 100, 1000],
		required: true,
	},
	participants: {
		type: Number,
		required: true,
		default: 1,
	},
});

module.exports = mongoose.model('Pool', PoolSchema);