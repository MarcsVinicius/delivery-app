module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("salesProduct", {
  quantity: DataTypes.INTEGER ,
  saleId: {
    type: DataTypes.INTEGER,
    field: 'sale_id',
    references: {
      model: 'sales',
      key: 'id',
    },
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    field: 'product_id',
    references: {
      model: 'products',
      key: 'id',
    },
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
  }
},
  {
   timestamps: false,
   tableName: 'sales_products',
   underScore: true,
  });

  SaleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return SaleProduct;
};

