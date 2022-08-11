const { createSale } = require('../services/sales')

const createSaleController = async (req, res, _next) => {
  const dataBody = req.body;
  const newSale = await createSale(dataBody);

  return res.status(201).json(newSale);
};

module.exports = {
  createSaleController,
};