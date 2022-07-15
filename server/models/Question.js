const mongoose = require("mongoose");

const QueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type:String,
    required: true,
  },
  views: {
    type: Number,
    default: 1,
    min: 1,
  }
},
{timestamps:true}
);

module.exports=mongoose.model('Question',QueSchema)