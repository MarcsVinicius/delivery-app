const { User, Sale } = require('../models');

const sellerOrder = async (id) => {
  const sellerOrders = await Sale.findAll({ where: { id } })
  return sellerOrders;
}

module.exports = {
  sellerOrder,
};