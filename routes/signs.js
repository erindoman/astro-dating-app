const router = require("express").Router();
const signsCtrl = require("../controllers/signs");

router.get('/', isLoggedIn, signsCtrl.index)
router.post('/', isLoggedIn, signsCtrl.create)
router.delete('/:id', isLoggedIn, signsCtrl.delete)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;