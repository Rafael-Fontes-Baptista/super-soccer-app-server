const { Router } = require("express")
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

module.exports = router
