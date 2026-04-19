const express = require('express')
const NoteRouter = express.Router()
const noteController = require("../controllers/note")

NoteRouter.post("/dashboard" ,noteController.postdashboard)
NoteRouter.get("/add-note" , noteController.getAddNote)
NoteRouter.post("/add-note" , noteController.postAddNote)

exports.NoteRouter = NoteRouter
