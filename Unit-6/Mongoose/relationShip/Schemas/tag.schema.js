const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    name: { type: String, required: true },
})

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag