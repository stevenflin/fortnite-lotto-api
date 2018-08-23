const mongoose = require('mongoose');
const User = require('../models/user');
const Pool = require('../models/pool');

const users = require('../data/users');
const pools = require('../data/pools');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const populateUsersPromise = Promise.resolve(User.insertMany(users));
const populatePoolsPromise = Promise.resolve(Pool.insertMany(pools));

const promises = [populateUsersPromise, populatePoolsPromise];

Promise.all(promises).then(() => process.exit());