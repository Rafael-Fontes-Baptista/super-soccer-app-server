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
          email: "user@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "testadmin",
          email: "admin@test.com",
          password: bcrypt.hashSync("qwerty", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/free-vector/businessman-avatar-character_24877-18284.jpg",
          stars: 3,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 1",
          email: "email1@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18514.jpg",
          stars: 5,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 2",
          email: "email2@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg",
          stars: 4,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 3",
          email: "email3@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vector-gratis/diseno-ilustracion-vector-personaje-avatar-hombre-joven_24877-18531.jpg",
          stars: 1,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 4",
          email: "email4@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/mulher-avatar-feminino-personagem-vector-ilustracao-design_24877-23104.jpg",
          stars: 2,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 5",
          email: "email5@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/jovem-mulher-avatar-personagem-vector-ilustracao-design_24877-18520.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 6",
          email: "email6@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/mulher-avatar-feminino-personagem-vector-ilustracao-design_24877-23102.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 7",
          email: "email7@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18550.jpg",
          stars: 4,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 8",
          email: "email8@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 2,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 9",
          email: "email9@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 10",
          email: "email10@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 11",
          email: "email11@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 1,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 12",
          email: "email12@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 13",
          email: "email13@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 4,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 14",
          email: "email14@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 15",
          email: "email15@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 5,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 16",
          email: "email16@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 5,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 17",
          email: "email17@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 18",
          email: "email18@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Player Test 19",
          email: "email19@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatar_url:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 2,
          isAdmin: false,
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
