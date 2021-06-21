"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tournaments",
      [
        {
          name: "Tournament 1",
          date: "2021-06-5",
          time: "09:00:00",
          local: "Footclub",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tournament 2",
          date: "2021-06-12",
          time: "11:00:00",
          local: "Footclub",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tournament 3",
          date: "2021-06-19",
          time: "20:00:00",
          local: "Soccer Square",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tournament 4",
          date: "2021-07-03",
          time: "09:00:00",
          local: "Soccer Square",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tournament 5",
          date: "2021-07-10",
          time: "09:00:00",
          local: "Soccer Square",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tournament 6",
          date: "2021-07-17",
          time: "17:00:00",
          local: "Soccer Square",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tournaments", null, {})
  },
}
