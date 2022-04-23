const express = require('express');
const PORT = 8000;
const mongoose = require("mongoose")
const DB_url = "mongodb://127.0.0.1:27017/intro"
const cors = require("cors")
const app = express();

mongoose.connect(DB_url);
let db = mongoose.connection;
app.use(cors());
const User = require("./Schemas/user.schema")

app.get("/users", async (req,res)=>{
    const users = await User.find({})
    .lean()
    .exec()
    console.log(users);
    res.status(200).json(users);

})

db.on("error",console.error.bind(console,"MongoDB Connection error"));
app.listen(PORT , ()=>{
    console.log(`Listening on port : ${PORT}`);
})