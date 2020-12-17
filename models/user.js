const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const signSchema = new Schema({
//   properties: {type: Object, 
//     status: {
//       type: Number
//     },
//     data: {type: Object, 
//       properties: {
//         dob: {type: String, format: Date},
//         sunsign: {type: String},
//         sunsign_image: {type: String},
//         chinese_zodiac: {type: String},
//         chinese_zodiac_image: {type: String}
//       }},
//       message: {type: null}
//     }
//   }) 


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
    ascSign: String
  }, {
  timestamps: true,
}
);


module.exports = mongoose.model("User", userSchema);
