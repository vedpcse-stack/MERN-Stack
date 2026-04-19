const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))

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


// app.get("/" , (req,res) => {

// })

// app.get("/user/:id" , (req,res) => {

//     console.log(req.params)
//     temp = req.query

//     temp["id"] = req.params["id"]

//     console.log(temp)
//     res.send(temp)
// })

// const addName = (req,res,next) => {
//     req.name = "xyz"
//     next()
// }

// const clgName = (req,res,next) => {
//     req.clg = "lju"
//     next()
// }
// const addmarks = (req,res,next) => {
//     req.total = 90
//     next()
// }

// app.get("/", (req,res) => {

// })

// app.get("/student" , addName ,clgName , addmarks , (req,res) => {
//     console.log(req.name)
//     console.log(req.clg)
//     console.log(req.total)
// })

// clg class enter system .
// 1. when a student acc. a class room , log that student enter the campas
// 2. varify where the student has a valid id card if valid allowed entry , display a welcome mass. , if not valid , denied access

// const entry = (res,req,next) => {
//     console.log("student enter in campus")
//     next()
// }

// const checkID = (req,res,next) => {
//     if (parseInt(req.params.id) > 0) {
//         next()
//     }else{
//         res.send("denied access")
//     }
// }

// app.get("/:id/:name" , entry , checkID , (req,res) => {
//     res.send(`welcome ${req.params.name} to campus`)
// } )

// write an express.js script to load an HTML file having username and
// password and submit button. On clicking submit button. It should
// jump on "check" page using "POST" method. If username is "admin"
// , then jump on next middleware to print "welcome… admin" , if
// username is not "admin" , then stay on same middleware to print
// "warning msg" in red color.

// const check = (req,res , next) => {
//     if (req.body.username == "admin") {
//         next()
//     }else{
//         res.send("warning msg")
//     }
// }
// app.get("/" , (req,res) => {
//     res.send(`
//         <form action="/check" method= "POST" >
//         name : <input name="username" type=text > <br> <br>
//         <input type=submit >
//         </form>
//         `)
// })

// app.post("/check" , check , (req,res) => {
//     res.send(`welcome ${req.body.username}`)
// })



// Write an ExpressJS to take a UserName, Password, Textarea for
// “message” & submit
// button using get method.
// 1) After clicking submit button the content of submitted details
// should be represented on “/login” page along with one “show vowel”
// link.
// 2) By clicking “show vowel” link count of vowel used in submitted
// “message” will display on “/message” page. (Use next() to route
// page)

// app.get("/" , (req,res,next)=>{
//     res.send(`
//         <form action="/login" method= "POST" >
//         name : <input name="username" type=text > <br> <br>
//         password : <input name="password" type=text > <br> <br>
//         mass : <textarea name="mass" ></textarea> <br> <br>
//         <input type=submit >
//         </form>
//         `)
// })
// let mass ;
// app.post("/login" , (req,res,next)=>{

//     res.write(`<a href="/message">show vowel</a> <br> <br>`) 

//     res.write(req.body.username + "<br>")
//     res.write(req.body.password + "<br>")
//     res.write(req.body.mass + "<br>")
//     mass = req.body.mass
//     res.write("\n")

    
//     res.send()
// })

// const countVol = (req,res,next) => {
//     let count = 0
//     for (let i = 0; i < mass.length; i++) {
//         if (mass[i] == 'a' || mass[i] == 'e' || mass[i] == 'i' || mass[i] == 'o' || mass[i] == 'u') {
//             count++
//         }
//     }
//     req.count = count
//     next()
// }

// app.get("/message" , countVol , (req,res) => {
//     res.send(`
//     total vol : ${req.count}
//     `)
// })



// app.use(express.static(__dirname))

// app.get("/process" , (req,res) => {
//     fname = req.query.fn
//     lname = req.query.ln
//     console.log(req.query)
//     res.send(`welcome ${fname} ${lname}`)
// })

// write express js to print massage in next line spliting by . & use get method to submit data , html file contain form of taxt area for massage & submit button

// app.use(express.static(__dirname , {index:"2.html"}))

// app.get("/msg" , (req,res) => {
//     msg = req.query.msg
//     data = msg.split(".")
//     data.forEach(element => {
//         res.write(element +"\n")
//     })
//     res.send()
    
// })



// 1. create 1 html file which contain two number type input field , one drop which contain option lke , select ,add/sub/mul/div , 1 submit button
// 2. input field must contain val > 0 else it will give a msg "plz enter valid num."
// 3. user must select any of the formula from the drop down else give a msg , give err
// 4. msg will display on /cal page
// 5. if one formula is select & numbers are enter then respe. cal will be performed on cal. page , use get method to req. data

// app.use(express.static(__dirname , {index:"3.html"}))

// app.get("/cal" , (req,res) => {
//     num1 = parseInt(req.query.num1)
//     num2 = parseInt(req.query.num2)
//     op = req.query.opr

//     console.log(num1 , num2 , op)

//     if (num1 <= 0 || num2 <= 0) {
//         res.send("plz enter valid num")
//     }
//     if (op == "add"){
//         res.send(num1 + num2)
//     }else if (op == "sub"){
//         res.send(num1 - num2)
//     }else if (op == "mul"){
//         res.send(num1 * num2)
//     }else if (op == "div"){
//         res.send(num1 / num2)
//     }

// })

// 1. html from with username , password & submit button 
// 2. use post method 
// 3. on visiting show the form
// 4. on submiting to login page , if username is admid dilsplay "welcome admin" else show "plz login with admin name" & show link to home page

// app.use(express.static(__dirname , {index:"4.html"}))

// app.post("/login" , (req, res) => {
//     if (req.body.username == "admin") {
//         res.send("welcome admin")
//     }else{
//         res.setHeader("content-type" , "text/html")
//         res.write("Plz login with admin name")
//         res.write("<br><br>Go to Home<br><br><a href='/'>home</a>")
//         res.send()
//     }
// })

// "------------------------------------------------------------------------------------------------"

app.use(express.static( "frontend" , {index:"5.html"}))


app.listen(3000 , () => {
    console.log('http://localhost:3000')
})