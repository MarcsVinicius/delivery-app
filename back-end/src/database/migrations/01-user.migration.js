'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        uniqueKey: true,
      },
      email: {
        type: Sequelize.STRING,
        uniqueKey: true,
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: false,
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  }
};