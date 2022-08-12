const productsService = require('../services/products.service');

const getAllProducts = async (_req, res, next) => {
  try {
    const getAll = await productsService.getAllProducts();
    
    return res.status(200).json(getAll);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
};