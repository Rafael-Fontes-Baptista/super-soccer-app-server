"use strict"
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/constants")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          full_name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {})
  },
}
