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
          goals_taken: 0,
          goals_done: 4,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 9,
          wins: 3,
          defeats: 1,
          draws: 0,
          goals_taken: 1,
          goals_done: 3,
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 6,
          wins: 2,
          defeats: 2,
          draws: 0,
          goals_taken: 3,
          goals_done: 5,
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 1,
          wins: 0,
          defeats: 3,
          draws: 1,
          goals_taken: 4,
          goals_done: 1,
          teamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 1,
          wins: 0,
          defeats: 3,
          draws: 1,
          goals_taken: 4,
          goals_done: 2,
          teamId: 5,
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
