const UserPool = require('../models/userPool');
const Repository = require('./repository');

class UserPoolRepository extends Repository {
  constructor() {
    super('UserPool');
  }
}

module.exports = new UserPoolRepository();