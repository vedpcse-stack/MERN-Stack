const express = require('express')
const NoteRouter = express.Router()
const noteController = require("../controllers/note")

NoteRouter.get("/dashboard" ,noteController.getdashboard)
NoteRouter.get("/add-note" , noteController.getAddNote)
NoteRouter.post("/dashboard" , noteController.postdashboard)

NoteRouter.get("/edit/:noteID" , noteController.getEditNote)
NoteRouter.post("/edit/:noteID" , noteController.postEditNote)

exports.NoteRouter = NoteRouter
