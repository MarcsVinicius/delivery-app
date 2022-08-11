const { sale } = require('../models');
const today = new Date(Date.now())
const saleDate = today.toUTCString();

const createSale = async (dataBody) => {
  
  const newSale = await sale.create({
    ...dataBody,
    saleDate,
  });

  return {
    id: newSale.id,
    ...dataBody,
    saleDate,
  };
};

module.exports = {
  createSale,
};