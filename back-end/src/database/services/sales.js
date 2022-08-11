const { sale, user } = require('../models');
const today = new Date(Date.now())
const saleDate = today.toUTCString();

const userLogged = async (email) => {
  const client = await user.findOne({ where: { email } });
  return client;
};

const responsibleSeller = async (name) => {
  const seller = await user.findOne({ where: { name } });
  return seller;
}

const createSale = async (dataBody, userId, sellerId) => {
  const newSale = await sale.create({
    userId: userId,
    sellerId: sellerId,
    totalPrice: dataBody.totalPrice,
    deliveryAddress: dataBody.deliveryAddress,
    deliveryNumber: dataBody.deliveryNumber,
    status: dataBody.deliveryNumber,
    saleDate,
  });

  return newSale;
};

module.exports = {
  createSale,
  userLogged,
  responsibleSeller,
};