const User = require('../models/user')

module.exports =  {
    index
}

function index(req, res, next) {
    let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  Student.find(modelQuery)
    .sort("name")
    .exec(function (err, students) {
      if (err) return next(err);
      res.render('students/index', {
        students,
        name: req.query.name,
        user: req.user
      });
    });
  }