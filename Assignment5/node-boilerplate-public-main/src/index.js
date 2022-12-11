var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    console.log(req.url,req.method,req.header)
    if(req.url=="/welcome"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end("<h2>Welcome to Dominos!</h2>")
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{"content-type":" application/json"})
        res.end(JSON.stringify({phone: '18602100000',email: 'guestcaredominos@jublfood.com'}))
    }
    else{
        res.end("404")
    }
}
httpServer.listen(8081,()=>{
    console.log("Our Serever Is Up at 8081")
})

module.exports = httpServer;