const express = require('express')

const mongoose = require('mongoose')

const app = express();
const PORT = 8000

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/test", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
}

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    ip_address: String,
    Age: Number
});
const movieSchema=new mongoose.Schema({
    movie_name:String,
    movie_genre:String,
    production_year:Number,
    budget:Number
})

const User = mongoose.model("user", userSchema);

const Movie = mongoose.model("movie",movieSchema)

// app.get("/users", async (req, res) => {
//     const user = await User.find({ email: "mini@gmail.com"})
//     .lean()
//     .exec()
//     console.log(user);
//     res.status(200).json({ data: user })
// })

app.get("/movies", async (req, res) => {
    const movie = await Movie.find({})
        .lean()
        .exec()
    console.log(movie);
    res.status(200).json({ data: movie })
})


const start = async () => {
    await connect();
    app.listen(PORT, (req, res) => {
        console.log(`Listening to port : ${PORT}`)
    });
};

start();
