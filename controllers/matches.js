const User = require("../models/user");

sunsignLookup = {
  taurus: ["Virgo", "Capricorn"],
  aries: ["Sagittarius", "Leo"],
  gemini: ["Libra", "Aquarius"],
  cancer: ["Scorpio", "Pisces"],
  leo: ["Aries", "Sagittarius"],
  virgo: ["Taurus", "Capricorn"],
  libra: ["Gemini", "Aquarius"],
  scorpio: ["Cancer", "Pisces"],
  sagittarius: ["Leo", "Aries"],
  capricorn: ["Virgo", "Taurus"],
  aquarius: ["Gemini", "Libra"],
  pisces: ["Cancer", "Scorpio"],
}

module.exports = {
  index
};

function index(req, res) {
  User.findById(req.user._id)
  .then((user) => {
    User.find({sunSign: { $in: sunsignLookup[user.sunSign]}})
    .then((users) => {
      res.render("matches", { title: "Matches", user: req.user, users });
    });
  })
}


// taking the user logged in and populating their sun sign and using the sunsign lookup to find key value match, populating  users with the value matches