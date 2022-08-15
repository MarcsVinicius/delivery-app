const User = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.sale, {
      as: 'sales',
      foreignKey: 'userId',
      foreignKey: 'sellerId',
    });
  };

  return User;
};

module.exports = User;
