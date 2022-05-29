const express =require("express")
const mongoose  = require("mongoose")
const User= require("./Schemas/user.schema")
const Tag = require("./Schemas/tag.schema")
const Answer  = require("./Schemas/answer.schema")
const Post = require("./Schemas/post.schema")
const port = 8000;
const DB_url ="mongodb+srv://ashish8923:ashu_8923@cluster0.x3dd0.mongodb.net/stackoverFlow?retryWrites=true&w=majority"
const app = express();
app.use(express.json());
const connect =()=>{
    return mongoose.connect(DB_url);
}

// Api requests for users
app.get("/users", async (req,res)=>{
    let users =await User.find({})
    console.log(users)
    res.status(200).json(users);
})

app.get("/users/:id", async (req, res) => {
    let users = await User.findById(req.params.id)
    res.status(200).json(users);
})

app.patch("/users/:id", async (req,res)=>{
    let users = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.status(200).json(users);
})

app.post("/users", async (req,res)=>{
    try{
        let createdUser = await User.insertMany(req.body);
        res.status(200).json(createdUser);
    }
    catch(e){
        console.log(e.message)
        res.status(400).send(e.message);
    }
});

// Api requests for tags
app.get("/tags", async (req, res) => {
    let tags = await Tag.find({})
    console.log(tags)
    res.status(200).json(tags);
})

app.get("/tags/:id", async (req, res) => {
    let tags = await Tag.findById(req.params.id)
    res.status(200).json(tags);
})


app.post("/tags", async (req, res) => {
    try {
        let createdtag = await Tag.create(req.body);
        res.status(200).json(createdtag);
    }
    catch (e) {
        console.log(e.message)
        res.status(400).send(e.message);
    }
});

// Api requests for posts
app.get("/posts", async (req, res) => {
    let posts = await Post.find({})
    console.log(posts)
    res.status(200).json(posts);
})

app.get("/posts/:id", async (req, res) => {
    let posts = await Post.findById(req.params.id)
    res.status(200).json(posts);
})


app.post("/posts", async (req, res) => {
    try {
        let createdpost = await Post.create(req.body);
        res.status(200).json(createdpost);
    }
    catch (e) {
        console.log(e.message)
        res.status(400).send(e.message);
    }
});

// Api requests for Answers
app.get("/answers", async (req, res) => {
    
    try{
        let answers = await Answer.find().populate({
            path: "post",
            select: ["title", "body"],
            populate: {
                path: "user",
                select: ["firstName", "age"]
            }
        })
            .populate({
                path: "user",
                select: ["firstName", "age"]
            });
        console.log(answers)
        res.status(200).json(answers);
    }
    catch(e) {
        console.log(e.message)
    }
}
)

app.get("/answers/:id", async (req, res) => {
    let answers = await Answer.findById(req.params.id)
    res.status(200).json(answers);
})


app.post("/answers", async (req, res) => {
    try {
        let createdAnswer = await Answer.create(req.body);
        res.status(200).json(createdAnswer);
    }
    catch (e) {
        console.log(e.message)
        res.status(400).send(e.message);
    }
});


app.listen(port, async()=>{
  try{
      await connect();
      console.log(`connected to port: ${port}`)
  }
  catch (e){
      console.log(e.message)
  }
})