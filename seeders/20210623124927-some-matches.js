"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "matches",
      [
        {
          team_a: "RED",
          goals_team_a: 1,
          team_b: "GRE",
          goals_team_b: 0,
          match_order: 1,
          status: false,
          tournament_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_a: "RED",
          goals_team_a: 1,
          team_b: "YEL",
          goals_team_b: 0,
          match_order: 5,
          status: false,
          tournament_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_a: "RED",
          goals_team_a: 1,
          team_b: "BLU",
          goals_team_b: 0,
          match_order: 8,
          status: false,
          tournament_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_a: "RED",
          goals_team_a: 1,
          team_b: "ORA",
          goals_team_b: 0,
          match_order: 3,
          status: false,
          tournament_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_a: "GRE",
          goals_team_a: 1,
          team_b: "YEL",
          goals_team_b: 0,
          match_order: 4,
          status: false,
          tournament_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_a: "GRE",
          goals_team_a: 1,
          team_b: "BLU",
          goals_team_b: 0,
          match_order: 9,
          status: false,
          tournament_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_a: "GRE",
          goals_team_a: 1,
          team_b: "ORA",
          goals_team_b: 0,
          match_order: 7,
          status: false,
          tournament_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_a: "YEL",
          goals_team_a: 1,
          team_b: "BLU",
          goals_team_b: 0,
          match_order: 2,
          status: false,
          tournament_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_a: "YEL",
          goals_team_a: 2,
          team_b: "ORA",
          goals_team_b: 1,
          match_order: 6,
          status: false,
          tournament_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          team_a: "BLU",
          goals_team_a: 1,
          team_b: "ORA",
          goals_team_b: 1,
          match_order: 10,
          status: false,
          tournament_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("matches", null, {})
  },
}