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
  const { email, password, fullName } = req.body

  if (!email || !password || !fullName) {
    return res.status(400).send("Please provide an email, password and a name")
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      fullName,
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

    const { fullName, email, password, avatarUrl } = req.body

    if (!fullName || !email) {
      return res.status(400).send({
        message: "A user must have a full name, email and password",
      })
    }

    console.log(req.body)

    if (!password) {
      await user.update({
        fullName,
        email,
        avatarUrl,
      })
    } else {
      await user.update({
        fullName,
        email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        avatarUrl,
      })
    }

    delete user.dataValues["password"] // don't send back the password hash

    return res.status(200).send({ user })
  } catch (e) {
    next(e)
  }
})

module.exports = router
