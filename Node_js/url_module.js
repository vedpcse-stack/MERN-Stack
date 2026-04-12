const url = require("url")
const fs = require("fs")
process.noDeprecation = true // to remove error msg
/*
var attr = 'http://localhost:3001/default.html?year=2026&month=march'

var q = url.parse(attr,true) // if i write true here then it give query in object formate but if i don't so it give quary in string formate
process.noDeprecation = true // to remove error msg
console.log(q)
*/

/*
this is value of q --> Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:3001',
  port: '3001',
  hostname: 'localhost',
  hash: null,
  search: '?year=2026&month=march',
  query: [Object: null prototype] { year: '2026', month: 'march' },
  pathname: '/default.html',
  path: '/default.html?year=2026&month=march',
  href: 'http://localhost:3001/default.html?year=2026&month=march'
}
  */



/*

console.log(q.query) // [Object: null prototype] { year: '2026', month: 'march' }
console.log(q.query.year) // 2026
console.log(q.query.month) // march
*/


// write this quary in file Async way
/*
data = JSON.stringify(q.query)
fs.writeFile("temp.txt" , data , (err) => {
    if (err) {
        console.log(err)
    }else{
        console.log("file created")
    }
} )
*/


/*
let u = 'http://localhost:3001/default.html?m1=50&m2=60&m3=70'

let w = url.parse(u,true)

console.log(`avarage : ${(parseInt(w.query.m1) + parseInt(w.query.m2) + parseInt(w.query.m3))/3}`)
*/


var attr = 'http://localhost:3001/default.html?year=2026&month=march'

let q = url.parse(attr)

fs.writeFile("temp.txt" , q.query , (err) => {
  if(err){
    throw err
  }else{
    console.log("file writen")
  }
})
