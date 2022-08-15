const { customerOrders, verifyToken } = require('../services/customers');

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

module.exports = {
  customerOrdersController,
};
