const express = require('express')
const http = require('http');
const app = express()
const port = 3000


let server = http.createServer(app);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

