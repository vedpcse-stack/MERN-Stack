const express = require('express')
const app = express()
const port = 3001

app.get("/" , (req,res,next) => {
    res.type("text/plain")
    res.send("<h1>Hello</h1>")
})

app.get("/about" , (req,res,next) => {
    res.type("text/html")
    // res.write("<h1>yes you</h1>")
    res.send("<h1>Be happy</h1>")
})


student = {
    name : "ved" , age : 20
}

app.get("/obj" , (req,res,next) => {
    // res.send(student)
    res.json(student)
})


app.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

