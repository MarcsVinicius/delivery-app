const { mapedProducts } = require('../../utils/functions');
const { decodeToken } = require('../../utils/JWT');
const { sale, user, product } = require('../models');

const verifyToken = (auth) => {
  const code = decodeToken(auth);
  return code;
};

const customerOrders = async (email) => {
  const customer = await user.findOne({ where: { email } });
  const orders = await sale.findAll({ where: { userId: customer.id }});
  
  return orders;
};

const customerOrderSale = async (id) => {
  const order = await sale.findOne({
    where: { id },
    include: [
      { model: product, as: 'products' },
      { model: user, as: 'users' }
    ],
  });
  const saleDetails = mapedProducts(order);

  return saleDetails;
}


module.exports = {
  customerOrders,
  verifyToken,
  customerOrderSale,
  mapedProducts,
};
