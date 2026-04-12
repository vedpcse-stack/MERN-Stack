const express = require('express')
const app = express()
const port = 3001

app.get("/" , (req,res,next) => {
    
})

// obj = {
//     name : "siya" ,
//     age : 20 , 
//     dis : "Developer"
// }

// app.get("/home" , (req,res,next) => {
//     res.json(obj)
// })

// app.get("/about" , (req,res,next) => {
//     res.type("text/plain")
//     res.write(`${obj.dis} ${obj.name} is ${obj.age} years old`)
//     res.send()
// })

// app.get("/contact" , (req,res,next) => {
//     res.send(`${obj.name}`)
// })



/*
s = [
    {name : "ved" , id : 1},
    {name : "jeel" , id : 2},
    {name : "kp" , id : 3},
]

app.get("/stu" , (req,res,next) => {
    res.type("text/html")
    res.write("<table border='5'>")
    res.write("<tr>")
    res.write(`<th> name</th>`)
    res.write(`<th> id </th>`)
    res.write("</tr>")
    // r = ""

    for (x of s) {
        res.write("<tr>")
        res.write(`<td> ${x.name} </td>`)
        res.write(`<td> ${x.id} </td>`)
        res.write("</tr>")
    }
    res.write("</table>")
    res.send()
})
    */



// write express to define one json array of 3 obj. having properites name & age of singer , sort this obj according , if user request sorted request then all names along with age should be printed according to dec. order of age , display this sorted value on sort page & display json object on home page

/*
s = [
    {name : "ved" , age : 21},
    {name : "jeel" , age : 33},
    {name : "kp" , age : 9},
]

sorted_s = s.sort((a,b) => b.age - a.age)

app.get("/home" , (req,res,next) => {
    res.json(s)
})

app.get("/sorted" , (req,res,next) => {
    res.json(sorted_s)
})
*/


app.get("/data" , (req,res) => {
    name = req.query.name
    age = req.query.age
    host = req.host

    res.write(`name = ${name} , age = ${age} , host = ${host}`)
    res.send()
})

app.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`)
})