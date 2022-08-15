const { sale, salesProduct } = require('../models');

const seedSalesProducts = async (dataBody, newSale) => {
  const products = dataBody.products;

  products.forEach( async (e) => {
      await salesProduct.create({
        quantity: e.quantity,
        saleId: newSale.id,
        productId: e.id,
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
    user_id: dataBody.userId,
    seller_id: dataBody.sellerId,
    total_price: dataBody.totalPrice,
    delivery_address: dataBody.deliveryAddress,
    delivery_number: dataBody.deliveryNumber,
    status: 'Pendente',
    sale_date: saleDate,
  };
};

module.exports = {
  createSale,
  seedSalesProducts,
};