const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String
	},
	googleId: String,
	balance: {
		type: Number,
		required: true,
		default: 10,
	},
	gamesPlayed: {
		type: Number,
		required: true,
		default: 0,
	},
	wins: {
		type: Number,
		required: true,
		default: 0,
	},
	activePools: {
		type: Number,
		required: true,
		default: 0,
	},
});

module.exports = mongoose.model('User', UserSchema);
