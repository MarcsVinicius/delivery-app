const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: {
      type: DataTypes.STRING,
      field: 'url_image',
    }
  }, {
    timestamps: false,
  }
);

  return Product;
};

module.exports = Product;
