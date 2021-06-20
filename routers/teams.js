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
    const teamToCreate = await Team.create({
      name,
      abrev,
      color,
    })

    return res.status(201).send({ message: "team created", teamToCreate })
  } catch (e) {
    next(e)
  }
})

router.patch("/:id", async (req, res, next) => {
  try {
    const teamToUpdate = await Team.findByPk(req.params.id)

    if (!teamToUpdate) {
      return res.status(404).send("team doesn't exist")
    }

    const { name, abrev, color } = req.body

    if (!name || !abrev || !color) {
      return res
        .status(400)
        .send({ message: "A team must have a name, abrev and color" })
    }

    await teamToUpdate.update({ name, abrev, color })

    return res.status(200).send({ teamToUpdate })
  } catch (e) {
    next(e)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    const teamToDelete = await Team.findByPk(req.params.id)

    if (!teamToDelete) {
      return res.status(404).send("team doesn't exist")
    }

    await teamToDelete.destroy()

    return res.status(200).send("team deleted")
  } catch (e) {
    next(e)
  }
})

module.exports = router
