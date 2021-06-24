"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("matches", "tournamentId", {
      type: Sequelize.INTEGER,
      references: {
        model: "tournaments",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })

    await queryInterface.addColumn("tournamentTeams", "teamId", {
      type: Sequelize.INTEGER,
      references: {
        model: "teams",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })

    await queryInterface.addColumn("tournamentTeams", "tournamentId", {
      type: Sequelize.INTEGER,
      references: {
        model: "tournaments",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("matches", "tournamentId")
    await queryInterface.removeColumn("tournamentTeams", "teamId")
    await queryInterface.removeColumn("tournamentTeams", "tournamentId")
  },
}
