const { sale } = require('../models');

const sellerOrder = async (id) => {
  const sellerOrders = await sale.findAll(
    { where: { sellerId: id } }
  );
  
  return sellerOrders;
}

module.exports = {
  sellerOrder,
};