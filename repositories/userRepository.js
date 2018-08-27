const User = require('../models/user');
const Repository = require('./repository');

class UserRepository extends Repository {
  constructor() {
    super('User');
  }
}

module.exports = new UserRepository();