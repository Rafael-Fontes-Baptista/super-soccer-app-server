const { Router } = require("express")
const isAdminMiddleware = require("../auth/isAdmin")
const User = require("../models").user
const Team = require("../models").team
const Match = require("../models").match
const Tournament = require("../models").tournament
const TournamentUser = require("../models").tournamentUser
const TournamentTeam = require("../models").tournamentTeam
const TournamentTeamUser = require("../models").tournamentTeamUser

const router = new Router()

router.get("/", async (req, res, next) => {
  try {
    const tournaments = await Tournament.findAll({
      order: [["date", "DESC"]],
      include: [User],
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
      include: [User, Match, { model: TournamentTeam, include: [Team, User] }],
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

router.post("/:id/players", async (req, res, next) => {
  try {
    const newTournamentPlayer = await TournamentUser.create({
      tournamentId: parseInt(req.params.id),
      userId: parseInt(req.user.id),
    })

    console.log("tournamentId", req.params.id, "userId")

    res.status(200).send({ message: "player registered" })
  } catch (e) {
    next(e)
  }
})

router.delete("/:id/players", async (req, res, next) => {
  try {
    const playerToDelete = await TournamentUser.findOne({
      where: {
        tournamentId: parseInt(req.params.id),
        userId: parseInt(req.user.id),
      },
    })

    if (!playerToDelete) {
      return res.status(404).send("user isn't registered to this tournament")
    }

    await playerToDelete.destroy()

    return res
      .status(200)
      .send({ message: "player deleted on this tournament" })
  } catch (e) {
    next(e)
  }
})

router.post("/:id/details", async (req, res, next) => {
  try {
    const teamsId = req.body.teamsId
    const tournamentId = req.params.id

    const tournamentUsers = await TournamentUser.findAll({
      where: { tournamentId },
      include: [User],
    })

    for (i = 0; i < teamsId.length; i++) {
      await TournamentTeam.create({
        tournamentId,
        teamId: teamsId[i],
      })
    }

    const tournamentTeams = await TournamentTeam.findAll({
      where: { tournamentId },
    })

    const tournamentPlayers = tournamentUsers
      .map((t) => t.user)
      .sort((a, b) => b.stars - a.stars)

    var iterator = 1
    for (i = 0; i < tournamentPlayers.length; i++) {
      await TournamentTeamUser.create({
        userId: tournamentPlayers[i].id,
        tournamentTeamId:
          iterator <= tournamentTeams.length ? iterator : (iterator = 1),
      })
      iterator++
    }

    const tournament = await Tournament.findByPk(req.params.id, {
      include: [User, Match, { model: TournamentTeam, include: [Team, User] }],
    })

    tournament.status = "started"
    await tournament.save()

    res.status(200).send({
      message: "ok",
      tournament,
    })
  } catch (e) {
    next(e)
  }
})

module.exports = router
