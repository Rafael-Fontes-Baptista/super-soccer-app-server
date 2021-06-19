const express = require("express")
const loggerMiddleWare = require("morgan")
const corsMiddleWare = require("cors")
const { PORT } = require("./config/constants")
const authMiddleWare = require("./auth/middleware")

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

app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user
  // don't send back the password hash
  delete user.dataValues["password"]

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
