const express = require('express')
const app = express()
const port = 3001


app.get("/" , (req,res,next)=>{
  res.set('content-Type' , 'text/html')
  res.send("Hello")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

