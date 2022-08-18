const { sale, user, product, saleProduct } = require('../models');
const { mapedProducts } = require('../../utils/functions');
const customError = require('../../utils/customError');

const sellerOrder = async (id) => {
  const sellerOrders = await sale.findAll(
    { where: { sellerId : id } });

    if (sellerOrders.length === 0) {
      throw customError(200, 'There is no order associated to this seller');
    }
  
  return sellerOrders;
};

const sellerOrderDetails = async (id) => {
  const order = await sale.findOne({ 
    where: { id },
    include: [
      { model: product, as: 'products' },
      { model: user, as: 'users' }
    ], });

  const orderDetails = mapedProducts(order);
  return orderDetails;
};

const sellerStatusUpdate = async (id, status) => {
  const order = await sale.findOne({ 
    where: { id },
  });
  order.status = status;
  order.save();
  return {
    message: 'updated!',
  }
}

module.exports = {
  sellerOrder,
  sellerOrderDetails,
  sellerStatusUpdate
};