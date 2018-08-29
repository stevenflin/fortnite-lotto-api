const Service = require('./service');
const UserRepository = require('../repositories/userRepository');

class UserService extends Service {
  constructor(userRepository) {
    super(userRepository);
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

module.exports = new UserService(UserRepository);
