const Service = require('./service');
const UserRepository = require('../repositories/userRepository');

class UserService extends Service {
  constructor(userRepository) {
    super(userRepository);
  }

  incrementActivePoolsByUserId(userId) {
    let updateQuery = { $inc : { activePools: 1 } };
    return this.updateById(userId, updateQuery);
  }
}

module.exports = new UserService(UserRepository);
