const { user } = require('../models');

const findAllUsers = async (role) => {
  const users = await user.findAll({ where: { role: role } });

  return users;
};

module.exports = {
  findAllUsers,
};