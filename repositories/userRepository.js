const User = require('../models/user');
const Repository = require('./repository');

class UserRepository extends Repository {
  constructor() {
    super('User');
  }

  updateActivePoolsGamesPlayedAndBalanceByUserId(userId, entry) {
    let updateQuery = { 
      $inc : { 
        gamesPlayed: 1,
        activePools: 1,
        balance: -entry,
      } 
    };
    return this.updateById(userId, updateQuery);
  }
}

module.exports = new UserRepository();