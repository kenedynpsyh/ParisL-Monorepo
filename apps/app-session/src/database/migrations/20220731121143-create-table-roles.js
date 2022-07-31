'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      {
        tableName: 'kaize_auth_roles',
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
        avatar: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: true,
        },
        background: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: true,
        },
        first_name: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: true,
        },
        last_name: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: true,
        },
        birthday: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
        gender: {
          type: Sequelize.DataTypes.STRING(30),
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
      tableName: 'kaize_auth_roles',
      schema: 'auth',
    });
  },
};
