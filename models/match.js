const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
      name: String,
      email: String,
      avatar: String,
      googleId: String,
      sunSign: [{type: Schema.Types.ObjectId, ref: 'Sign'}],
    },{
      timestamps: true,
    }
  ); 

Module.exports = mongoose.model("Match", matchSchema);
