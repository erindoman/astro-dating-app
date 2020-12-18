const Sign = require("../models/Sign");
const User = require("../models/user");

module.exports = {
  index,
  edit,
  update
}

function index(req, res){
  res.render("signs", {title: "Edit Page", user: req.user} )
 }

function edit(req, res) {
  Sign.find({})
  .then((signs) => {
    res.render('signs/edit', {title: "Review Sign", user: req.user})
  })
}

function update(req, res) {
  Sign.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, sign){
    res.redirect('/signs')
  })
}