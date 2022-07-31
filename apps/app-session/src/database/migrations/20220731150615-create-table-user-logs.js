'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      {
        tableName: 'kaize_service_user_logs',
        schema: 'service',
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
        loginAt: {
          type: Sequelize.DataTypes.DATE,
          default: Sequelize.NOW,
        },
        logoutAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
        user_id: {
          type: Sequelize.DataTypes.STRING(90),
          allowNull: false,
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      tableName: 'kaize_service_user_logs',
      schema: 'service',
    });
  },
};
