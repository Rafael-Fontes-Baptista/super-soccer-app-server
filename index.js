const express = require("express")
const loggerMiddleWare = require("morgan")
const corsMiddleWare = require("cors")
const authMiddleWare = require("./auth/middleware")
const isAdminMiddleware = require("./auth/isAdmin")
const { PORT } = require("./config/constants")
const authRouter = require("./routers/auth")
const teamsRouter = require("./routers/teams")
const usersRouter = require("./routers/users")
const tournamentsRouter = require("./routers/tournaments")

const app = express()

app.use(loggerMiddleWare("dev"))

const bodyParserMiddleWare = express.json()
app.use(bodyParserMiddleWare)

app.use(corsMiddleWare())

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY))
  })
}

app.use("/", authRouter)
app.use("/teams", authMiddleWare, isAdminMiddleware, teamsRouter)
app.use("/users", authMiddleWare, isAdminMiddleware, usersRouter)
app.use("/tournaments", authMiddleWare, tournamentsRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
