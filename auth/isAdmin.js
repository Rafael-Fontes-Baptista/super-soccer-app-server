async function isAdmin(req, res, next) {
  if (req.user.isAdmin) {
    return next()
  } else {
    return res.status(401).send({ message: "user not authorized" })
  }
}

module.exports = isAdmin
