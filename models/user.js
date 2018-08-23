const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
	balance: Number,
	gamesPlayed: Number,
	wins: Number,
	activePools: [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model('User', UserSchema);