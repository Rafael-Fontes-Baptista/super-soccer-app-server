const bcrypt = require("bcrypt")
const { Router } = require("express")
const { SALT_ROUNDS } = require("../config/constants")
const User = require("../models").user

const router = new Router()

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [["fullName", "ASC"]],
    })

    users.map((user) => delete user.dataValues["password"])
    res.status(200).send({ message: "ok", users })
  } catch (e) {
    next(e)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body

    if (!fullName || !email || !password) {
      return res
        .status(400)
        .send({ message: "A user must have a full name, email and password" })
    }
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      fullName,
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
    if (req.body.status === false || req.body.status === true) {
      await userToUpdate.update(req.body)
    } else if (req.body.stars) {
      if (req.body.stars >= 1 && req.body.stars <= 5) {
        await userToUpdate.update(req.body)
      } else {
        return res.status(404).send("Stars range from 1 to 5")
      }
    }

    return res.status(200).send({ userToUpdate })
  } catch (e) {
    next(e)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    const userToDelete = await User.findByPk(req.params.id)

    if (!userToDelete) {
      return res.status(404).send("user doesn't exist")
    }

    await userToDelete.destroy()

    return res.status(200).send("user deleted")
  } catch (e) {
    next(e)
  }
})

module.exports = router
