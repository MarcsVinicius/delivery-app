const { decodeToken } = require('../../utils/JWT');
const { sale, user } = require('../models');

const verifyToken = (auth) => {
  const code = decodeToken(auth);
  return code;
};

const customerOrders = async (email) => {
  const customer = await user.findOne({ where: { email } });
  const orders = await sale.findAll({ where: { userId: customer.id }});
  
  return orders;
}

module.exports = {
  customerOrders,
  verifyToken,
};
