const User = require("../models/user");

sunsignLookup = {
  Taurus: ["Virgo", "Capricorn"],
  Aries: ["Sagittarius", "Leo"],
  Gemini: ["Libra", "Aquarius"],
  Cancer: ["Scorpio", "Pisces"],
  Leo: ["Aries", "Sagittarius"],
  Virgo: ["Taurus", "Capricorn"],
  Libra: ["Gemini", "Aquarius"],
  Scorpio: ["Cancer", "Pisces"],
  Sagittarius: ["Leo", "Aries"],
  Capricorn: ["Virgo", "Taurus"],
  Aquarius: ["Gemini", "Libra"],
  Pisces: ["Cancer", "Scorpio"],
}

module.exports = {
  index
};

// function takes the user logged in and populates their sun sign. the function uses the sunsign lookup to find key value match, populating the appropriate sign matches the user

function index(req, res) {
  User.findById(req.user._id)
  .then((user) => {
    User.find({sunSign: { $in: sunsignLookup[user.sunSign]}})
    .then((users) => {
      res.render("matches", { title: "Matches", user: req.user, users });
    });
  })
}

