const router = require("express").Router();
const users = require("../controllers/users");
const usersCtrl = require("../controllers/users");

router.get('/', isLoggedIn, usersCtrl.index)
router.get('/profile', isLoggedIn, usersCtrl.showProfile);
router.get("/:id", isLoggedIn, usersCtrl.show)
router.get("/:id/edit", isLoggedIn, usersCtrl.edit)
router.put('/:id', usersCtrl.update)
router.delete('/:id/edit', usersCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
