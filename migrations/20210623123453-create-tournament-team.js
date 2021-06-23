"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tournamentTeams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      wins: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      defeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      draws: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      goals_taken: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      goals_done: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      // team_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "teams",
      //     key: "id",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "SET NULL",
      // },
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
    await queryInterface.dropTable("tournamentTeams")
  },
}
