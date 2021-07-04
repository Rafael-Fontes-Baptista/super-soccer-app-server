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

router.post("/:id/details", isAdminMiddleware, async (req, res, next) => {
  try {
    const tournamentId = req.params.id

    // creating teams
    const numOfTeams = req.body.numOfTeams

    const allTeams = await Team.findAll()
    const teamsId = allTeams.map((t) => t.id).splice(0, numOfTeams)

    for (i = 0; i < teamsId.length; i++) {
      await TournamentTeam.create({
        tournamentId,
        teamId: teamsId[i],
      })
    }

    // selecting teams created
    const tournamentTeams = await TournamentTeam.findAll({
      where: { tournamentId },
      include: [Team],
    })

    // selecting players
    const tournamentUsers = await TournamentUser.findAll({
      where: { tournamentId },
      include: [User],
    })

    // sorting the players
    const tournamentPlayers = tournamentUsers
      .map((t) => t.user)
      .sort((a, b) => b.stars - a.stars)

    // adding players to the teams (by stars)
    var iterator = 0
    for (i = 0; i < tournamentPlayers.length; i++) {
      await TournamentTeamUser.create({
        userId: tournamentPlayers[i].id,
        tournamentTeamId:
          iterator < tournamentTeams.length
            ? tournamentTeams[iterator].id
            : tournamentTeams[(iterator = 0)].id,
      })
      iterator++
    }

    // creating the matches
    var order = 0
    for (i = 0; i < tournamentTeams.length; i++) {
      for (j = i + 1; j < tournamentTeams.length; j++) {
        await Match.create({
          tournamentId,
          teamA: tournamentTeams[i].team.abrev,
          teamB: tournamentTeams[j].team.abrev,
          matchOrder: ++order,
        })
      }
    }

    // starting the tournament
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

router.patch(
  "/:id/matches/:matchId",
  isAdminMiddleware,
  async (req, res, next) => {
    try {
      // STEP 0: Holding request data
      const tournamentId = parseInt(req.params.id)
      const matchId = parseInt(req.params.matchId)
      const { teamAId, teamAScore, teamBId, teamBScore } = req.body
      const matchResult =
        teamAScore === teamBScore ? "draw" : teamAScore > teamBScore ? "A" : "B"

      // STEP 1: Update match's result
      const currentMatch = await Match.findByPk(matchId)
      currentMatch.status = false
      currentMatch.goalsTeamA = teamAScore
      currentMatch.goalsTeamB = teamBScore
      await currentMatch.save()

      // STEP 2: Update team A result
      const currentTeamA = await TournamentTeam.findByPk(teamAId)
      currentTeamA.goalsFor += teamAScore
      currentTeamA.goalsAgainst += teamBScore
      currentTeamA.score +=
        matchResult === "draw" ? 1 : matchResult === "A" ? 3 : 0
      if (matchResult === "A") currentTeamA.wins += 1
      if (matchResult === "B") currentTeamA.defeats += 1
      if (matchResult === "draw") currentTeamA.draws += 1
      await currentTeamA.save()

      // STEP 3: Update team B result
      const currentTeamB = await TournamentTeam.findByPk(teamBId)
      currentTeamB.goalsFor += teamBScore
      currentTeamB.goalsAgainst += teamAScore
      currentTeamB.score +=
        matchResult === "draw" ? 1 : matchResult === "B" ? 3 : 0
      if (matchResult === "B") currentTeamB.wins += 1
      if (matchResult === "A") currentTeamB.defeats += 1
      if (matchResult === "draw") currentTeamB.draws += 1
      await currentTeamB.save()

      // STEP 4: Finish the tournament if finished all matches
      const allMatches = await Match.findAll({
        where: { tournamentId, status: true },
      })
      if (allMatches.length === 0) {
        // select the champion
        const teams = await TournamentTeam.findAll({
          where: { tournamentId },
          include: [Team],
        })
        const ranking = teams.sort((a, b) => {
          const scoreComparison = b.score - a.score
          if (!scoreComparison) {
            return b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst)
          } else {
            return scoreComparison
          }
        })

        const champion = ranking.shift()

        // updating the tournament
        const tournament = await Tournament.findByPk(tournamentId)
        tournament.status = "finished"
        tournament.champion = champion.team.name
        await tournament.save()
      }

      res.status(200).send({ message: "match finished!" })
    } catch (e) {
      next(e)
    }
  }
)

module.exports = router
