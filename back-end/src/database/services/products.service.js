const { product } = require('../models');

const getAllProducts = async () => {
  const getAll = await product.findAll();

  return getAll;
};

module.exports = {
  getAllProducts,
};