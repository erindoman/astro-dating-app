const User = require("../models/user");
// const axios = require('axios')

// let config = {
//     headers: {
//         'x-rapidapi-key': process.env.API_KEY
//     }
// }

module.exports = {
  index,
}

function index(req, res) {
      res.render("signs", { title: "Signs", user: req.user });
  }