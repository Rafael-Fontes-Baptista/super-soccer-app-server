"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("matches", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      teamA: {
        type: Sequelize.STRING,
      },
      teamB: {
        type: Sequelize.STRING,
      },
      goalsTeamA: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      goalsTeamB: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      matchOrder: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("matches")
  },
}
