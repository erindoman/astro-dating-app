const User = require("../models/user");

module.exports = {
  index,
  show,
  showProfile,
  edit
};

function index(req, res) {
  User.find({}).then((users) => {
    res.render("users/index", { title: "User Index", user: req.user, users });
  });
}

function showProfile(req, res) {
  User.findById(req.user._id)
  .populate("friends")
  .then((user) => {
    res.render("users/profile", {title: "Profile Page", user})
  })
}

function show(req, res) {
  User.findById(req.params.id, function(err, users) {
    res.render('users/show', {users})
  })
}

function edit(req, res){
 res.render("users/edit", {title: "Edit Page", user: req.user} )
}