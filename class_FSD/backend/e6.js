const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))


app.use(express.static( "../frontend" , {index:"6.html"}))

app.listen(3000 , () => {
    console.log('http://localhost:3000')
})