const express = require('express')
const userRouter = express.Router()

const homeController = require('../controllers/homes')

userRouter.get("/" ,homeController.getHome )

userRouter.get("/homes/:homeId" , homeController.getHomeDetails)

exports.userRouter = userRouter
