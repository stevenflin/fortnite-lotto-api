const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usersController = require('./controllers/usersController');
const poolsController = require('./controllers/poolsController');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use('/api/users', usersController);
app.use('/api/pools', poolsController);

app.listen(port);

console.log('Listening on port ' + port);
