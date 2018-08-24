const mongoose = require('mongoose');
const Users = require('../models/user');
const Pools = require('../models/pool');

const users = require('../data/users');
const pools = require('../data/pools');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const populateUsersPromise = Promise.resolve(Users.insertMany(users));
const populatePoolsPromise = Promise.resolve(Pools.insertMany(pools));

const promises = [populateUsersPromise, populatePoolsPromise];

Promise.all(promises).then(() => process.exit());