"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "teams",
      [
        {
          name: "Red",
          abrev: "RED",
          color: "#FF0000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Green",
          abrev: "GRE",
          color: "#00FF00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blue",
          abrev: "BLU",
          color: "#0000FF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yellow",
          abrev: "YEL",
          color: "#FFFF00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Orange",
          abrev: "ORA",
          color: "#FFA500",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("teams", null, {})
  },
}
