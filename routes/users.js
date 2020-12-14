const router = require("express").Router();

router.get('/profile', isLoggedIn, usersCtrl.show);

module.exports = router;
