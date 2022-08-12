const { sale } = require('../models');
const customError = require('../../utils/customError');

const sellerOrder = async (id) => {
  const seller = await sale.findOne({ where: { id } });

  if(!seller) {
    throw customError(400, 'Invalid seller id');
  }
  const sellerOrders = await sale.findAll(
    { where: { sellerId: id } }
  );

  if (sellerOrders.length === 0) {
    throw customError(200, 'There is no order associated to this seller');
  }
  
  return sellerOrders;
}

module.exports = {
  sellerOrder,
};