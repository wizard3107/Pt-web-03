const http = require("http")
 const server = http.createServer((req,res)=>{

    if(req.url==='/login')
    res.write("welcome ashish")
    else if(req.url==='/logout')
    res.write("goodbye Ashish")
    else if(req.url==="/")
    res.write("Hello")
    else
    {
        res.writeHead(404,{});
        res.write("this page does not exist")
    }
    res.end();
 })

 server.listen(8001,()=>{
     console.log("starting server")
 })