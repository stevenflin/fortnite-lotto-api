const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userController = require('./controllers/userController');
const poolController = require('./controllers/poolController');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/users', userController);
app.use('/api/pools', poolController);

app.listen(port);

console.log('Listening on port ' + port);
