const { findAllSellers } = require('../services/users')

const usersController = async (_req, res, _next) => {
  const dataBody = 'seller';
  const foundSeller = await findAllSellers(dataBody);

  return res.status(200).json(foundSeller);
};

module.exports = {
  usersController,
};