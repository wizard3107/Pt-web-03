const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
   body:{type:String, required:true},
   post:{type:mongoose.Schema.Types.ObjectId, ref:"post"},
   user: { type: mongoose.Schema.Types.ObjectId, ref: "user"}
})

const Answer = mongoose.model("answer", answerSchema);

module.exports = Answer