const {
  createSale,
  seedSalesProducts,
} = require('../services/sales')

const createSaleController = async (req, res, _next) => {
  const dataBody = req.body;
  
  const newSale = await createSale(dataBody);
  await seedSalesProducts(dataBody, newSale);

  return res.status(201).json(newSale);

};

module.exports = {
  createSaleController,
};