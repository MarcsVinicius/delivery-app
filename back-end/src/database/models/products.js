const Product = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.REAL,
    url_image: DataTypes.STRING,
  });
  return Product;
};

module.exports = Product;