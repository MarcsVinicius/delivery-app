const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    name: DataTypes.STRING,
    price: DataTypes.REAL,
    url_image: DataTypes.STRING,
  }, {
    timestamps: false,
  }
  );
  return Product;
};

module.exports = Product;