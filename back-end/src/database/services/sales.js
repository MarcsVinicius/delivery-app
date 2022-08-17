const { sale, salesProduct } = require('../models');

const seedSalesProducts = async (dataBody, newSale) => {
  const products = dataBody.products;

  products.forEach( async (e) => {
      await salesProduct.create({
        quantity: e.quantity,
        saleId: newSale.id,
        productId: e.productId,
      })
    });
};

const createSale = async (dataBody) => {
  const today = new Date(Date.now())
  const saleDate = today.toUTCString();
  const newSale = await sale.create({
    userId: dataBody.userId,
    sellerId: dataBody.sellerId,
    totalPrice: dataBody.totalPrice,
    deliveryAddress: dataBody.deliveryAddress,
    deliveryNumber: dataBody.deliveryNumber,
    status: 'Pendente',
    saleDate,
  });

  return {
    id: newSale.id,
    userId: dataBody.userId,
    sellerId: dataBody.sellerId,
    totalPrice: dataBody.totalPrice,
    deliveryAddress: dataBody.deliveryAddress,
    deliveryNumber: dataBody.deliveryNumber,
    status: 'Pendente',
    saleDate: saleDate,
  };
};

module.exports = {
  createSale,
  seedSalesProducts,
};