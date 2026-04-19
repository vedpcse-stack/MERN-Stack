const express = require('express')
const userRouter = express.Router()

const noteController = require('../controllers/note')

userRouter.get("/" ,noteController.getLogin )

// userRouter.get("/homes/:homeId" , homeController.getHomeDetails)

exports.userRouter = userRouter
