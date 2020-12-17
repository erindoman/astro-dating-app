const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signSchema = new Schema({
  sign: String,
  _id: String,
  startDate: Date,
  endDate: Date
})

Module.exports = mongoose.model("Sign", signSchema);
