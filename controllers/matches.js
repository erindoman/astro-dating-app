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