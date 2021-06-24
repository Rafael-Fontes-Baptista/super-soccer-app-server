const { Router } = require("express")
const isAdminMiddleware = require("../auth/isAdmin")
const Tournament = require("../models").tournament
const tournamentUser = require("../models").tournamentUser
const User = require("../models").user

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

router.post("/", isAdminMiddleware, async (req, res, next) => {
  try {
    const { name, date, time, local } = req.body
    console.log(name, date, time, local)

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

router.get("/:id", async (req, res, next) => {
  try {
    const tournament = await Tournament.findByPk(req.params.id, {
      include: [User],
    })

    res.status(200).send({ message: "ok", tournament })
  } catch (e) {
    next(e)
  }
})

router.patch("/:id", isAdminMiddleware, async (req, res, next) => {
  try {
    const tournamentToUpdate = await Tournament.findByPk(req.params.id)

    if (!tournamentToUpdate) {
      return res.status(404).send("tournament doesn't exist")
    }

    if (req.body.status) {
      await tournamentToUpdate.update(req.body)
    } else {
      const { name, date, time, local } = req.body

      if (!name || !date || !time) {
        return res
          .status(400)
          .send({ message: "A tournament must have a name, date and time" })
      }

      if (tournamentToUpdate.status !== "open") {
        return res
          .status(404)
          .send(`status: ${tournamentToUpdate.status} - it can not be edited`)
      }
      await tournamentToUpdate.update({ name, date, time, local })
    }

    return res.status(200).send({ tournamentToUpdate })
  } catch (e) {
    next(e)
  }
})

router.delete("/:id", isAdminMiddleware, async (req, res, next) => {
  try {
    const tournamentToDelete = await Tournament.findByPk(req.params.id)

    if (!tournamentToDelete) {
      return res.status(404).send("tournament doesn't exist")
    }

    if (tournamentToDelete.status !== "open") {
      return res
        .status(404)
        .send(`status: ${tournamentToDelete.status} - it can not be deleted`)
    }

    await tournamentToDelete.destroy()

    return res.status(200).send("tournament deleted")
  } catch (e) {
    next(e)
  }
})

router.get("/:id/players", async (req, res, next) => {
  try {
    const tournamentPlayers = await Tournament.findAll({
      where: {
        id: req.params.id,
      },
      include: [User],
    })

    res.status(200).send({ message: "ok", tournamentPlayers })
  } catch (e) {
    next(e)
  }
})

router.post("/:id/players", async (req, res, next) => {
  try {
    const newTournamentPlayer = await tournamentTeamUser.create({
      tournament_id: req.params.id,
      user_id: req.user.id,
    })

    res.status(200).send({ message: "ok", newTournamentPlayer })
  } catch (e) {
    next(e)
  }
})

router.delete("/:id/players", async (req, res, next) => {
  try {
    const playerToDelete = await tournamentTeamUser.findByPk(req.user.id, {
      where: {
        tournament_id: req.params.id,
      },
    })

    await playerToDelete.destroy()

    return res.status(200).send("player deleted on this tournament")
  } catch (e) {
    next(e)
  }
})

module.exports = router
