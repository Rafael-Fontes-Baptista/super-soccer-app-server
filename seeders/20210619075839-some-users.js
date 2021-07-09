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
          password: "test1234",
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
          password: "qwerty",
          avatarUrl:
            "https://image.freepik.com/free-vector/businessman-avatar-character_24877-18284.jpg",
          stars: 3,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Lionel Messi",
          email: "email1@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18514.jpg",
          stars: 5,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Robert Lewandowski",
          email: "email2@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg",
          stars: 4,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Toni Kroos",
          email: "email3@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vector-gratis/diseno-ilustracion-vector-personaje-avatar-hombre-joven_24877-18531.jpg",
          stars: 1,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "André Silva",
          email: "email4@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/mulher-avatar-feminino-personagem-vector-ilustracao-design_24877-23104.jpg",
          stars: 2,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Karim Benzema",
          email: "email5@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/jovem-mulher-avatar-personagem-vector-ilustracao-design_24877-18520.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Neymar Jr.",
          email: "email6@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/mulher-avatar-feminino-personagem-vector-ilustracao-design_24877-23102.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Cristiano Ronaldo",
          email: "email7@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18550.jpg",
          stars: 4,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Jordi Alba",
          email: "email8@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 2,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Romelu Lukaku",
          email: "email9@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Andreas Christensen",
          email: "email10@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Jadon Sancho",
          email: "email11@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 1,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "João Cancelo",
          email: "email12@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Memphis Depay",
          email: "email13@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 4,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Kevin De Bruyne",
          email: "email14@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Jan Oblak",
          email: "email15@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 5,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Thibaut Courtois",
          email: "email16@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 5,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Éder Militão",
          email: "email17@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Edmond Tapsoba",
          email: "email18@test.com",
          password: "test1234",
          avatarUrl:
            "https://image.freepik.com/vetores-gratis/personagem-de-avatar-jovem_24877-9475.jpg",
          stars: 3,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "John Stones",
          email: "email19@test.com",
          password: "test1234",
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
