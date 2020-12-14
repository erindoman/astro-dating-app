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
  title: String,
  startDate: Date,
  endDate: Date,
  users: [""]
}, {
  timestamps: true
})

const moonSign = new Schema({
  objectId: String,
  title: String,
  startDate: Date,
  endDate: Date,
  users: [""]
}, {
  timestamps: true
})

const ascSign = new Schema({
  objectId: String,
  title: String,
  startDate: Date,
  endDate: Date,
  users: [""]
}, {
  timestamps: true
})

module.exports = mongoose.model("User", userSchema);
