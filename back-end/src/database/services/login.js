const { User } = require('../models')

const loginService = async (email) => {
  const user = await User.findOne({ where: { email } });
}

module.exports = {
  userLogin,
};

