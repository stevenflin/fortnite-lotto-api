const mongoose = require('mongoose');
const User = require('../models/user');
const Pool = require('../models/pool');
const Record = require('../models/record');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const cleanUsersPromise = Promise.resolve(User.deleteMany());
const cleanPoolsPromise = Promise.resolve(Pool.deleteMany());
const cleanRecordsPromise = Promise.resolve(Record.deleteMany())

const promises = [cleanUsersPromise, cleanPoolsPromise, cleanRecordsPromise];

Promise.all(promises).then(() => process.exit());