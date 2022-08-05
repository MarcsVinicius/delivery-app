const { User } = require('../models')

const userLogin = async (email) => {
  const user = await User.findOne({ where: { email } });
}

module.exports = {
  userLogin,
};

