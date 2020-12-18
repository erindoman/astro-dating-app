const Sign = require("../models/sign");

module.exports = {
    index,
    create,
    delete: deleteReview
}

function index(req, res){
    Sign.find({})
    .then((signs) =>
    res.render("signs/index", {title: "Reviews", user: req.user, signs})
    )
   }

function create(req, res) {
    Sign.create(req.body)
    .then(() => {
      res.redirect('/signs')
    })
  }

function deleteReview(req, res) {
    Sign.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/signs')
    })
}