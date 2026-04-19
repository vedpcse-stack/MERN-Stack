const express = require('express')
const app = express()
const {userRouter} = require('./routes/userRouter')
const {NoteRouter} = require('./routes/NoteRouter')
const path = require('path')
const rootDir = require('./utils/pathUtil')
const errorController = require('./controllers/errors')

const session = require("express-session");

app.use(session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true
}));

app.set('view engine' , 'ejs')
app.set('views' , 'views')

app.use(express.urlencoded())

app.use(userRouter)
app.use("/note" , NoteRouter)

app.use(express.static(path.join(rootDir , 'public')))

app.use(errorController.pageNotFound)

app.listen(3010 , () => {
    console.log('http://localhost:3010')
})