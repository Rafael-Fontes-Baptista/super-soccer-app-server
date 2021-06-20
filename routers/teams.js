const { Router } = require("express")
const Team = require("../models").team

const router = new Router()

router.get("/", async (req, res, next) => {
  try {
    const teams = await Team.findAll({
      order: [["name", "ASC"]],
    })

    res.status(200).send({ message: "ok", teams })
  } catch (e) {
    next(e)
  }
})

module.exports = router
