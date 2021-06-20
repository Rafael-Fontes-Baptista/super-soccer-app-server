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

router.post("/", async (req, res, next) => {
  try {
    const { name, abrev, color } = req.body

    if (!name || !abrev || !color) {
      return res
        .status(400)
        .send({ message: "A team must have a name, abrev and color" })
    }
    const team = await Team.create({
      name,
      abrev,
      color,
    })

    return res.status(201).send({ message: "Team created", team })
  } catch (e) {
    next(e)
  }
})

router.patch("/:id", async (req, res, next) => {
  try {
    const team = await Team.findByPk(req.params.id)

    if (!team) {
      return res.status(404).send("Team doesn't exist")
    }

    const { name, abrev, color } = req.body

    if (!name || !abrev || !color) {
      return res
        .status(400)
        .send({ message: "A team must have a name, abrev and color" })
    }

    await team.update({ name, abrev, color })

    return res.status(200).send({ team })
  } catch (e) {
    next(e)
  }
})

module.exports = router
