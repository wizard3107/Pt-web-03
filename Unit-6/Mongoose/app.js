const express = require ('express')

const mongoose = require('mongoose')

const app=express();
const PORT =8000

const connect = ()=>{
    return mongoose.connect("mongodb://localhost:27017/test", {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
    });
}



const start = async ()=>{
    await connect();
    app.listen(PORT, (req, res) => {
        console.log(`Listening to port : ${PORT}`)
    });
};

start();
