"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tournamentTeamUsers",
      [
        {
          userId: 1,
          tournamentTeamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          tournamentTeamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          tournamentTeamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          tournamentTeamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          tournamentTeamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          tournamentTeamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          tournamentTeamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          tournamentTeamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          tournamentTeamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          tournamentTeamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          tournamentTeamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          tournamentTeamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          tournamentTeamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          tournamentTeamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          tournamentTeamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          tournamentTeamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          tournamentTeamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 18,
          tournamentTeamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 19,
          tournamentTeamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 20,
          tournamentTeamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tournamentTeamUsers", null, {})
  },
}
