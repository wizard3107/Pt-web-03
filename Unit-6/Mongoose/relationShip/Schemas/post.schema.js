const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    createdAt:{type:Date, default: Date.now()},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    tags:[{type:mongoose.Schema.Types.ObjectId, ref:"tag"}]
})

const Post = mongoose.model("post", postSchema);

module.exports = Post