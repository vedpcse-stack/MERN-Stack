const express = require('express')
const app = express()

app.use(express.urlencoded())

// app.get("/" , (req,res) => {
//     res.send(`
//         <form action="/details" method= "POST" >
//         name : <input name="name" type=text > <br> <br>

//         gender : 
//         Male <input name="gender"  value="male" type="radio" checked > <br>
//         Female <input name="gender" value="female" type="radio" > <br>
//         Other <input name="gender" value="other" type="radio" > <br> <br>

//         skill : <br>
//         python <input name="skill"  value="python" type="checkbox" checked > <br>
//         react <input name="skill" value="react" type="checkbox" > <br>
//         Node/Express <input name="skill" value="Node/Express" type="checkbox" > <br> <br>

//         Dept : 
//         <select name="dept">
//         <option value="HR">HR</option>
//         <option value="IT">IT</option>
//         <option value="Manager">Manager</option>
//         </select>
//         <input type="submit" >
//         `)
// })

// app.post("/details" , (req,res) => {
    
//     temp = req.body
//     console.log(temp)
//     res.write(temp.name + "\n")
//     res.write(temp.gender + "\n")
//     res.write(temp.skill + "\n")
//     res.write(temp.dept)
//     res.send()

// })


app.get("/" , (req,res) => {

})

app.get("/user/:id" , (req,res) => {

    console.log(req.params)
    temp = req.query

    temp["id"] = req.params["id"]

    console.log(temp)
    res.send(temp)
})

app.listen(3020 , () => {
    console.log('http://localhost:3020')
})