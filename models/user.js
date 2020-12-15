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
  
const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    sunSign: [{type: Schema.Types.ObjectId, ref: 'Sign'}],
    moonSign: [{type: Schema.Types.ObjectId, ref: 'Sign'}],
    ascSign: [{type: Schema.Types.ObjectId, ref: 'Sign'}]
  },{
    timestamps: true,
  }
);


  // const sunSign = new Schema({
    //   objectId: String,
    //   sign: [signSchema],
    //   startDate: Date,
    //   endDate: Date,
    //   users: [""]
// }, {
//   timestamps: true
// })

// const moonSign = new Schema({
//   objectId: String,
//   sign: [signSchema],
//   startDate: Date,
//   endDate: Date,
//   users: [""]
// }, {
//   timestamps: true
// })

// const ascSign = new Schema({
//   objectId: String,
//   sign: [signSchema],
//   startDate: Date,
//   endDate: Date,
//   users: [""]
// }, {
//   timestamps: true
// })

module.exports = mongoose.model("User", userSchema);
