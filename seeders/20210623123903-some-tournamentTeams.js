"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tournamentTeams",
      [
        {
          score: 12,
          wins: 4,
          defeats: 0,
          draws: 0,
          goalsAgainst: 0,
          goalsFor: 4,
          teamId: 1,
          tournamentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 9,
          wins: 3,
          defeats: 1,
          draws: 0,
          goalsAgainst: 1,
          goalsFor: 3,
          teamId: 2,
          tournamentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 6,
          wins: 2,
          defeats: 2,
          draws: 0,
          goalsAgainst: 3,
          goalsFor: 5,
          teamId: 3,
          tournamentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 1,
          wins: 0,
          defeats: 3,
          draws: 1,
          goalsAgainst: 4,
          goalsFor: 1,
          teamId: 4,
          tournamentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 1,
          wins: 0,
          defeats: 3,
          draws: 1,
          goalsAgainst: 4,
          goalsFor: 2,
          teamId: 5,
          tournamentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tournamentTeams", null, {})
  },
}
