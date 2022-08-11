const { user } = require('../models');

const findAllSellers = async (seller) => {
  const sellers = await user.findAll({ where: { role: seller } });

  return sellers;
};

module.exports = {
  findAllSellers,
};