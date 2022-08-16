const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
      field: 'user_id'
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
      field: 'seller_id'
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      field: 'delivery_address',
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date',
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente',
    }, 
  },
  {
    timestamps: false,
    underScore: true,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, {
      as: 'users',
      foreignKey: 'userId',
      foreignKey: 'sellerId',
    });
  };

  return Sale;
};

module.exports = Sale;
