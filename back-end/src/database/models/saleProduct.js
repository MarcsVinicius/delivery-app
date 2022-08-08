const SalesProducts = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProduct", {
    quantity: DataTypes.INTEGER,
  });
  return SalesProduct;
};

module.exports = SalesProducts;