const router = require("express").Router();
const signsCtrl = require("../controllers/signs");

router.get('/', isLoggedIn, signsCtrl.index)
router.post('/', isLoggedIn, signsCtrl.create)
router.delete('/:id', isLoggedIn, signsCtrl.delete)
// router.get("/:id/edit", isLoggedIn, signsCtrl.edit)
// router.put('/:id', signsCtrl.update)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;