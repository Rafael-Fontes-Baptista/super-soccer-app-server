"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tournamentUsers",
      [
        {
          tournamentId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournamentId: 1,
          userId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tournamentUsers", null, {})
  },
}
