const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    total_price: DataTypes.REAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,

  }, {
    
      timestamps: false,
    
  });
  return Sale;
};

module.exports = Sale;