const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sunSign = new Schema({
  name: String,
}, {
  timestamps: true
})

const moonSign = new Schema({
  name: String,
}, {
  timestamps: true
})

const ascSign = new Schema({
  name: String,
}, {
  timestamps: true
})

const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    status: String,
    sunSign: String,
    moonSign: String,
    ascSign: String,
  }, {
  timestamps: true,
}
);


module.exports = mongoose.model("User", userSchema);
