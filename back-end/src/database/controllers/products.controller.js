const productsService = require('../services/products.service');

const getAllProducts = async (req, res, next) => {
  try {
    const getAll = await productsService.getAllProducts();
    
    return res.status(200).json(getAll);
  } catch (err) {
    console.log('get products controller:', err);
    next(err);
  }
};

module.exports = {
  getAllProducts,
};