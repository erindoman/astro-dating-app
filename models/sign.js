const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signSchema = new Schema ({
  sign: {type: String, enum: ['Scorpio', 'Aquarius', 'Cancer', 'Pisces', 'Aries', 'Sagittarius', 'Capricorn', 'Libra', 'Virgo', 'Gemini', 'Leo', 'Taurus']},
  rating: {type: Number, min: 1, max: 5},
  content: String
},{
  timestamps: true
})

module.exports = mongoose.model("Sign", signSchema);
