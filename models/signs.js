const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signSchema = new Schema({
    properties: {type: Object, 
      status: {
        type: Number
      },
      data: {type: Object, 
        properties: {
          dob: {type: String, format: Date},
          sunsign: {type: String},
          sunsign_image: {type: String},
          chinese_zodiac: {type: String},
          chinese_zodiac_image: {type: String}
        }},
        message: {type: null}
      }
    }) 

Module.exports = mongoose.model("Sign", signSchema);
