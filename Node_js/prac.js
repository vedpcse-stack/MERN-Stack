const http = require("http")
const fs = require("fs")
const url = require("url");
process.noDeprecation = true

let q = 'http://localhost:3000/n2.html'

const server = http.createServer( (req,res) => {
    console.log(req.url)
} )


server.listen(3000 , () => {
    console.log(`http://localhost:3000`)
})