const router = require("express").Router()
const matchesCtrl = require('../controllers/matches')

router.get("/", isLoggedIn, matchesCtrl.index)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;