const bcrypt = require("bcrypt")
const { Router } = require("express")
const { toJWT } = require("../auth/jwt")
const authMiddleware = require("../auth/middleware")
const User = require("../models/").user
const { SALT_ROUNDS } = require("../config/constants")

const router = new Router()

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" })
    }

    const user = await User.findOne({ where: { email } })

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      })
    }

    delete user.dataValues["password"] // don't send back the password hash
    const token = toJWT({ userId: user.id })
    return res.status(200).send({ token, ...user.dataValues })
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: "Something went wrong, sorry" })
  }
})

router.post("/signup", async (req, res) => {
  const { email, password, full_name } = req.body

  if (!email || !password || !full_name) {
    return res.status(400).send("Please provide an email, password and a name")
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      full_name,
    })

    delete newUser.dataValues["password"] // don't send back the password hash

    const token = toJWT({ userId: newUser.id })

    res.status(201).json({ token, ...newUser.dataValues })
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" })
    }

    return res.status(400).send({ message: "Something went wrong, sorry" })
  }
})

router.get("/me", authMiddleware, async (req, res) => {
  delete req.user.dataValues["password"] // don't send back the password hash
  res.status(200).send({ ...req.user.dataValues })
})

router.patch("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id)

    if (!user) {
      return res.status(404).send("user doesn't exist")
    }

    const { full_name, email, password, avatar_url } = req.body

    if (!full_name || !email) {
      return res.status(400).send({
        message: "A user must have a full name, email and password",
      })
    }

    console.log(req.body)

    if (!password) {
      await user.update({
        full_name,
        email,
        avatar_url,
      })
    } else {
      await user.update({
        full_name,
        email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        avatar_url,
      })
    }

    delete user.dataValues["password"] // don't send back the password hash

    return res.status(200).send({ user })
  } catch (e) {
    next(e)
  }
})

module.exports = router
