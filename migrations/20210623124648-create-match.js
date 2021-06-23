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
      team_a: {
        type: Sequelize.STRING,
      },
      team_b: {
        type: Sequelize.STRING,
      },
      goals_team_a: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      goals_team_b: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      match_order: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      // tournament_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "tournaments",
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
    await queryInterface.dropTable("matches")
  },
}
