const { sale, saleProduct } = require('../models');
const today = new Date(Date.now())
const saleDate = today.toUTCString();

const seedSalesProducts = async (dataBody, newSale) => {
  const products = dataBody.products;

  products.forEach( async (e) => {
      await saleProduct.create({
        quantity: e.quantity,
        saleId: newSale.id,
        productId: e.productId,
      })
    });
};

const createSale = async (dataBody) => {
  const newSale = await sale.create({
    userId: dataBody.userId,
    sellerId: dataBody.sellerId,
    totalPrice: dataBody.totalPrice,
    deliveryAddress: dataBody.deliveryAddress,
    deliveryNumber: dataBody.deliveryNumber,
    status: 'Pendente',
    saleDate,
  });

  return newSale;
};

module.exports = {
  createSale,
  seedSalesProducts,
};