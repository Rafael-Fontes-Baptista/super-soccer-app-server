"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("matches", "tournament_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "tournaments",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })

    await queryInterface.addColumn("tournamentTeams", "team_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "teams",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("matches", "tournament_id")
    await queryInterface.removeColumn("tournamentTeams", "team_id")
  },
}
