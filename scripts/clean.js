const mongoose = require('mongoose');
const Users = require('../models/user');
const Pools = require('../models/pool');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const cleanUsersPromise = Promise.resolve(Users.deleteMany());
const cleanPoolsPromise = Promise.resolve(Pools.deleteMany());

const promises = [cleanUsersPromise, cleanPoolsPromise];

Promise.all(promises).then(() => process.exit());