module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("saleProduct",
  { quantity: DataTypes.INTEGER },
  {
   timestamps: false,
   underScore: true,
  });

  return SaleProduct;
};

