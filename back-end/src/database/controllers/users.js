const { findAllUsers } = require('../services/users')

const usersController = async (req, res, _next) => {
  const { role } = req.params;
  console.log(role)

  const foundUsers = await findAllUsers(role);
  if (!foundUsers) return res.status(404).json('User not found!')

  return res.status(200).json(foundUsers);
};

module.exports = {
  usersController,
};