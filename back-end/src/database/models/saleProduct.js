const SalesProducts = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("salesProduct", {
    quantity: DataTypes.INTEGER,
  },  {
    timestamps: false,
  });
  return SalesProduct;
};

module.exports = SalesProducts;