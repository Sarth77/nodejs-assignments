const fs = require('fs')
const http = require('http')
require("dotenv").config();

const Result =process.env.RESULT || "Sahil";

fs.writeFile('./index.html',`<h1> Hello World </h1>  <p> this is ${Result} </p>`,(error)=>{
    console.log(error)
})

http.createServer((req,res)=>{
    fs.readFile('./index.html','utf-8',(error,data)=>{
        res.writeHead(200,{'contentType':"text/html"})
        res.write(data)
        res.end();
    })

}).listen(5000)
