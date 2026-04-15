const express = require('express')
const app = express()
const {hostRouter} = require('./routes/hostRouter')
const {userRouter} = require('./routes/userRouter')
const path = require('path')
const rootDir = require('./utils/pathUtil')
const errorController = require('./controllers/errors')

app.set('view engine' , 'ejs')
app.set('views' , 'views')

app.use(express.urlencoded())

app.use(userRouter)
app.use("/host" , hostRouter)

app.use(express.static(path.join(rootDir , 'public')))

app.use(errorController.pageNotFound)

app.listen(3010 , () => {
    console.log('http://localhost:3010')
})