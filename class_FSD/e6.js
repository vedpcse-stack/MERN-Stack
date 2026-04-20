const express = require('express')
const app = express()
const path = require('path')
app.use(express.urlencoded({extended:true}))

// html_path = path.join(__dirname , "frontend")
// css_path = path.join(__dirname , "css")
// img_path = path.join(__dirname , "img")

// app.use(express.static( html_path , {index:"6.html"}))
// app.use(express.static( css_path))
// app.use(express.static( img_path))




app.listen(3000 , () => {
    console.log('http://localhost:3000')
})