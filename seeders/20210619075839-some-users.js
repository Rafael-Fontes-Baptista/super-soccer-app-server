"use strict"
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/constants")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "testuser",
          email: "user@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "testadmin",
          email: "admin@test.com",
          password: bcrypt.hashSync("qwerty", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/free-vector/businessman-avatar-character_24877-18284.jpg",
          stars: 3,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test A",
          email: "email1@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18514.jpg",
          stars: 5,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test B",
          email: "email2@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg",
          stars: 4,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test C",
          email: "email3@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vector-gratis/diseno-ilustracion-vector-personaje-avatar-hombre-joven_24877-18531.jpg",
          stars: 1,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test D",
          email: "email4@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/mulher-avatar-feminino-personagem-vector-ilustracao-design_24877-23104.jpg",
          stars: 2,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test E",
          email: "email5@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/jovem-mulher-avatar-personagem-vector-ilustracao-design_24877-18520.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test F",
          email: "email6@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/mulher-avatar-feminino-personagem-vector-ilustracao-design_24877-23102.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test G",
          email: "email7@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18550.jpg",
          stars: 4,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test H",
          email: "email8@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 2,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test I",
          email: "email9@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test J",
          email: "email10@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test L",
          email: "email11@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 1,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test M",
          email: "email12@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test N",
          email: "email13@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 4,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test O",
          email: "email14@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test P",
          email: "email15@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 5,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test Q",
          email: "email16@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 5,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test R",
          email: "email17@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test S",
          email: "email18@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Player Test T",
          email: "email19@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          avatarUrl:
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
