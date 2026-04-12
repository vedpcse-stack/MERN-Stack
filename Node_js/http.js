const http = require("http")
const fs = require("fs")
const url = require("url");
process.noDeprecation = true
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
// let s = "http://localhost:3000/exem.txt?c1=Hello&c2=FSD2%20T1%20test&c3=Welcome%20To%20LJU#AllTheBest"
/*
const server = http.createServer( (req,res) => {
    s = req.url
    res.setHeader('Content-Type' , 'text/html')
    var q = URL.parse(s,true);
    let text = q.query.c1 + "\n" + q.query.c3 + " " + q.query.c2
    console.log(text)
    console.log(q)
    console.log(req.url)
})
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
        res.write("Thank you..!\n");
        res.write(JSON.stringify(a));
        res.end();
    }
});
*/

// `Write a nodejs program load a simple html file from static url on nodejs s
// erver and print its content as html content.`

// let addr = "http://localhost:3004/n2.html";
/*
let server = http.createServer( (req , res) => {
    var q = url.parse(req.url,true);
    console.log(q)
    console.log(q.pathname)
    fname = "." + (req.url === "/" ? "/n2.html" : req.url.pathname)
    fs.readFile(fname , (err,data) => {
        if(err){
            res.setHeader("Content-Type" , "text/html")
            res.writeHead(404)
            return res.end(`<h1>page not found</h1>`)
        }else{
            res.setHeader("Content-Type" , "text/html")
            return res.end(data)
        }  
    })
} )
*/


/*
let server = http.createServer( (req,res) => {
    res.setHeader('Content-Type' , 'image/png')
    res.writeHead(200)
    let img = fs.readFileSync("blueBG.jpeg")
    // res.write(img)
    res.end(img);
} )
*/

// home page display "welcome to login page" in blue color & font size --> 32 ,
// html file from static url having form with details like name,pass,submit & reset button
// gellary page reflectone image hello.jpg & another page shown page not fount
/*
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.setHeader("Content-Type" , "text/html")
        res.writeHead(200)
        return res.end("<h1 style='color:blue;font-size:32px'>Welcome to login page</h1>")
    }else if(req.url === "/login.html"){
        res.setHeader("Content-Type" , "text/html")
        res.writeHead(200)
        q = url.parse(req.url,true)
        data = fs.readFileSync("." + q.pathname , "utf-8")
        return res.end(data)
    }if(req.url==="/blueBG.jpeg"){
        res.setHeader('Content-Type' , 'image/png')
        res.writeHead(200)
        let img = fs.readFileSync("blueBG.jpeg")
        // res.write(img)
        res.end(img);
    }else{
        res.setHeader("Content-Type" , "text/html")
        res.writeHead(404)
        return res.end(`<h1>page not found</h1>`)
    }
})
*/

server.listen(3000 , () => {
    console.log(`http://localhost:3000`)
})


