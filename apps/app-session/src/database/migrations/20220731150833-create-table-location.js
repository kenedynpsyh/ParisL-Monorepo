'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      {
        tableName: 'kaize_auth_location',
        schema: 'auth',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        public_id: {
          type: Sequelize.DataTypes.STRING(90),
          unique: true,
          allowNull: false,
        },
        country: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: true,
        },
        states: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: true,
        },
        city: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: true,
        },
        address: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: true,
        },
        postcode: {
          type: Sequelize.DataTypes.STRING(50),
          allowNull: true,
        },
        user_id: {
          type: Sequelize.DataTypes.STRING(90),
          unique: true,
          allowNull: false,
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      tableName: 'kaize_auth_location',
      schema: 'auth',
    });
  },
};
