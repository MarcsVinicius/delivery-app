const { createSale, userLogged, responsibleSeller } = require('../services/sales')

const createSaleController = async (req, res, _next) => {
  const dataBody = req.body;
  // const { email } = req.params;

  const email = "zebirita@email.com"

  const Client = await userLogged(email);
  const seller = await responsibleSeller(dataBody.sellerName);
  const newSale = await createSale(dataBody, Client.id, seller.id);

  return res.status(201).json(newSale);
};

module.exports = {
  createSaleController,
};