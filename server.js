const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userController = require('./controllers/userController');
const poolController = require('./controllers/poolController');
const recordController = require('./controllers/recordController');

const authRoutes = require('./routes/auth-routes.js');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('dotenv').config();

const app = express();

// set up session cookies

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey]
}));

// initialize passport

app.use(passport.initialize());
app.use(passport.session());

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
app.use('/api/records', recordController);
app.use('/api/auth', authRoutes);

app.listen(port);

console.log('Listening on port ' + port);
