const note = require('../models/userNote')
const express = require('express')
const Note = require('../models/userNote')
let name ;

exports.getLogin = (req , res) => {
    res.render("login" , {title : 'login'})
}

exports.postdashboard = (req , res) => {
    name = req.body.username
    req.session.username = name;
    Note.fatchAll((notes) => {
        if (!notes[name]) {
            notes[name] = [];
        }
        res.render("dashBoard" , {title : 'dashboard' , notes : notes[name]})
    })
}

exports.getdashboard = (req , res) => {
    res.render("dashBoard" , {title : 'dashboard'})
}

exports.getAddNote = (req , res) => {
    res.render("addNote" , {title : 'addNote'})
}

exports.postAddNote = (req , res) => {
    title = req.body.title
    content = req.body.content
    name = req.session.username
    const newNote = new note(title , content)
    newNote.save(name , (notes) => {
        if (!notes[name]) {
            notes[name] = [];
        }ins
        res.render("dashBoard" , {title : 'dashboard' , notes : notes[name]})
    }) 
    
}