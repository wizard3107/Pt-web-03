const express=require("express");
const PORT = 8000
const users=require("./users.json")
const app= express();
// function logger(req,res,next){
//     console.log("logger midde ware")
//     next();

// }
// app.get('/',[logger,express.json()],(req,res)=>{
//     res.send("home page get request");
//     console.log("Home page get request" )

// })

// app.post('/',express.json(),(req, res) => {
//     res.status(201).json(req.body);
//     console.log("req body:",req.body) 

// })

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})
app.get('/users',(req,res)=>{
    res.json(users)
})
app.get('/users/:id',(req,res)=>{
    const {id}=req.params;
    console.log({id});
    const user= users.find((user)=>user.id===Number.parseInt(id))
    res.json(user);
})
app.post('/users',express.json(),(req,res)=>{
    console.log("post request sent",req.body)
    users.push(req.body)
    res.send(req.body)
})
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
}); 