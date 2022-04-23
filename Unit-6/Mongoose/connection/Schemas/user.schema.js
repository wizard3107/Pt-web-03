const mongoose =require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    ip_address: String,
    Age: Number
})

const User = mongoose.model("user",userSchema);

module.exports=User;