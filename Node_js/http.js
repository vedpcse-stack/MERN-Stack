const http = require("http")
const fs = require("fs")
const url = require("url");
fs.writeFile
/*
const server = http.createServer( (req,res) => {
    res.setHeader('Content-Type' , 'text/html')
    res.writeHead(200)
    res.write("<h1>Hello</h1>")
    res.end()
} )
*/

// `with static url`
/*
let attr = 'http://localhost:3001/default.html?year=2026&month=march'

const server = http.createServer( (req,res) => {
    res.setHeader('Content-Type' , 'text/html')
    res.writeHead(200)
    var q = url.parse(attr,true).query
    let text = q.year + " " + q.month
    res.end(text)
} )
*/

// `with browser url`
/*
const server = http.createServer( (req,res) => {
    res.setHeader('Content-Type' , 'text/html')
    var q = url.parse(req.url,true).query;
    let text = q.year + " " + q.month
    res.end(text)
} )
*/

// `1. create page with two link -> Home(/) & about(/about)
//  2. both pages are html type
//  3. if user add any other url so show "page not found" `
/*
const server = http.createServer( (req,res) => {
    if(req.url === "/"){
        res.setHeader('Content-Type' , 'text/html')
        res.writeHead(200)
        res.write(`<h1>Home page </h1>
                   <ul>
                   <li> <a href="/" >Home</a>  </li>
                   <li> <a href="/about" >about</a>  </li>
                   </ul>`)
        return res.end()
    }else if(req.url === "/about"){
        res.setHeader('Content-Type' , 'text/html')
        res.writeHead(200)
        res.write(`<h1>about page </h1>
                   <ul>
                   <li> <a href="/" >Home</a>  </li>
                   </ul>`)
        return res.end()
    }else {
        res.write("Page not found")
        return res.end()
    }
    
} )
*/

// `Write node js script to request server to display JSON data on browser`
/*
var server=http.createServer( (req,res) => {
    if(req.url=="/"){
        const a={"Name":"ABC", "Age":35};
        res.writeHead(200,{"content-type":"application/json"});
        res.write("Thank you..!");
        res.write(JSON.stringify(a));
        res.end();
    }
});
*/

`Write a nodejs program load a simple html file from static url on nodejs s
erver and print its content as html content.`
/*
let addr = "http://localhost:3004/n2.html";
let server = http.createServer( (req , res) => {
    var q = url.parse(addr,true);
    console.log(q)
    console.log(q.pathname)
    data = fs.readFileSync("." + q.pathname)
    res.setHeader("Content-Type" , "text/html")
    res.write(data)
    return res.end()
} )
*/

server.listen(3000 , () => {
    console.log(`http://localhost:3000`)
})


