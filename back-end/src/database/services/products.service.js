const { Product } = require('../models');

const getAllProducts = async () => {
  const getAll = await Product.findAll();

  return getAll;
};

module.exports = {
  getAllProducts,
};