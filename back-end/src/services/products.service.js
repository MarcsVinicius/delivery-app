const { Product } = require('../database/models/products');

const getAllProducts = async () => {
  const getAll = await Product.findAll();

  return getAll;
};

module.exports = {
  getAllProducts,
};