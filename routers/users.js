const bcrypt = require("bcrypt")
const { Router } = require("express")
const { SALT_ROUNDS } = require("../config/constants")
const User = require("../models").user

const router = new Router()

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [["full_name", "ASC"]],
    })

    res.status(200).send({ message: "ok", users })
  } catch (e) {
    next(e)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const { full_name, email, password } = req.body

    if (!full_name || !email || !password) {
      return res
        .status(400)
        .send({ message: "A user must have a full name, email and password" })
    }
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      full_name,
    })

    return res.status(201).send({ message: "user created", newUser })
  } catch (e) {
    next(e)
  }
})

router.patch("/:id", async (req, res, next) => {
  try {
    const userToUpdate = await User.findByPk(req.params.id)

    if (!userToUpdate) {
      return res.status(404).send("user doesn't exist")
    }

    const { full_name, email, password, avatar_url } = req.body

    if (!full_name || !email || !password) {
      return res
        .status(400)
        .send({ message: "A user must have a full name, email and password" })
    }

    await userToUpdate.update({ full_name, email, password, avatar_url })

    return res.status(200).send({ userToUpdate })
  } catch (e) {
    next(e)
  }
})

module.exports = router
