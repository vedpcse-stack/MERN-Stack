const http = require('http');
const fs = require('fs');

const server = http.createServer( (req , res) => {
    console.log(req.url , req.method);
    if (req.url === '/') {
        res.setHeader("Location" , "/home");
        res.writeHead(302);
        return res.end( )
    }
    if (req.url === '/home') {
        console.log("inside home.html")
        return 
    }
} )

server.listen(3000 , () => {
    console.log(`server listen on http://localhost:${3000}`)
})