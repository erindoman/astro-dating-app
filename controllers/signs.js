const User = require("../models/user");
const axios = require('axios')

let config = {
    headers: {
        'x-rapidapi-key': process.env.API_KEY
    }
}

module.exports = {
  index,
  search,
  showSign
}

function index(req, res) {
    User.find({}).then((users) => {
      res.render("users/index", { title: "User Index", user: req.user, users });
    });
}

function search(req, res){
  axios.get("https://astrology-horoscope.p.rapidapi.com/zodiac_finder/details_requirements/", config)
    .then((response) => {
      res.render("signs", {
        title: "About the Signs",
        message: response.data
    })
    .catch(function(error) {
        console.error(error)
    })
  });
}

function showSign(req, res) {
  axios
    .get(`https://astrology-horoscope.p.rapidapi.com/zodiac_finder/details_requirements/`, config)
    .then((response) => {
      res.render("signs", {
        title: "About the Signs",
        message: response.data
        }); 
      });
  }