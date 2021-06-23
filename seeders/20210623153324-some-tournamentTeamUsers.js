"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tournamenTeamUsers",
      [
        {
          tournament_id: 1,
          user_id: 1,
          tournamentTeam_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 2,
          tournamentTeam_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 3,
          tournamentTeam_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 4,
          tournamentTeam_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 5,
          tournamentTeam_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 6,
          tournamentTeam_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 7,
          tournamentTeam_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 8,
          tournamentTeam_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 9,
          tournamentTeam_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 10,
          tournamentTeam_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 11,
          tournamentTeam_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 12,
          tournamentTeam_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 13,
          tournamentTeam_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 14,
          tournamentTeam_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 15,
          tournamentTeam_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 16,
          tournamentTeam_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 17,
          tournamentTeam_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 18,
          tournamentTeam_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 19,
          tournamentTeam_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tournament_id: 1,
          user_id: 20,
          tournamentTeam_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tournamenTeamUsers", null, {})
  },
}
