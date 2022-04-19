const express = require("express")
const books = require('./books.json')

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    console.log("hello")
    res.send("Hello");
})

app.get("/books", express.json(), (req, res) => {
    res.json(books)
    console.log(books)
})

app.get("/books/:name",express.json(),(req,res)=>{
    const { name } = req.params;
    console.log({ name });
    const book = books.find((book) => book.name === name)
    res.json(book);
})
app.listen(PORT, (req, res) => {
    console.log(`Listening to the Port: ${PORT}`)
})