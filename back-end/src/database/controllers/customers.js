const {
  customerOrders,
  verifyToken,
  customerOrderSale,
} = require('../services/customers');

const customerOrdersController = async (req, res, _next) => {
  try {
    const token = req.headers.authorization;
    const user = verifyToken(token);

    const orders = await customerOrders(user.email);
    if (!orders) return res.status(400).json('Customer not found!');

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(401).json({ message: 'The token must be a valid token' });
  }
};

const orderSaleController = async (req, res, _next) => {
  const { id } = req.params;

  const order = await customerOrderSale(id);
  if (!order) return res.status(400).json('Order not found!');

  return res.status(200).json(order);
};

module.exports = {
  customerOrdersController,
  orderSaleController,
};
