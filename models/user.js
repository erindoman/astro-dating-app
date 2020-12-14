const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
  },
  {
    timestamps: true,
  }
);

const sunSign = new Schema({
  objectId: String,
  sign: {type: String, enum: ['Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn']},
  startDate: Date,
  endDate: Date,
  users: [""]
}, {
  timestamps: true
})

const moonSign = new Schema({
  objectId: String,
  sign: {type: String, enum: ['Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn']},
  startDate: Date,
  endDate: Date,
  users: [""]
}, {
  timestamps: true
})

const ascSign = new Schema({
  objectId: String,
  sign: {type: String, enum: ['Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn']},
  startDate: Date,
  endDate: Date,
  users: [""]
}, {
  timestamps: true
})

module.exports = mongoose.model("User", userSchema);
