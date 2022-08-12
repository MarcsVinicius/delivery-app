const sellerService = require('../services/seller.service');

const sellerOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sellerOrders = await sellerService.sellerOrder(id);
    return res.status(200).json(sellerOrders);
  } catch (err) {
    console.log('seller controller:', err);
    next(err);
  }
}

module.exports = {
  sellerOrder,
};