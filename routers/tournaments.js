const { Router } = require("express")
const Tournament = require("../models").tournament

const router = new Router()

router.get("/", async (req, res, next) => {
  try {
    const tournaments = await Tournament.findAll({
      order: [["date", "DESC"]],
    })

    res.status(200).send({ message: "ok", tournaments })
  } catch (e) {
    next(e)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const { name, date, time, local } = req.body

    if (!name || !date || !time) {
      return res
        .status(400)
        .send({ message: "A tournament must have a name, date and time" })
    }
    const newTournament = await Tournament.create({
      name,
      date,
      time,
      local,
    })

    return res
      .status(201)
      .send({ message: "tournament created", newTournament })
  } catch (e) {
    next(e)
  }
})

module.exports = router
