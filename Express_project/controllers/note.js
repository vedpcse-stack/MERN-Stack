const note = require("../models/userNote");
const express = require("express");
const Note = require("../models/userNote");
const path = require('path')
const rootDir = require("../utils/pathUtil");
const fs = require("fs");

let name;
let addNote = false;

exports.getLogin = (req, res) => {
  res.render("login", { title: "login" });
};

exports.getdashboard = (req, res) => {
  name = req.query.username;
  req.session.username = name;
  req.session.addNote = addNote;
  Note.fatchAll((notes) => {
    if (!notes[name]) {
      notes[name] = [];
    }
    res.render("dashBoard", { title: "dashboard", notes: notes[name] });
  });
};

exports.postdashboard = (req, res) => {
  // if (req.url == "/note/dashboard"){
  //     return;
  // }
  if (!req.session.addNote) {
    Note.fatchAll((notes) => {
      if (!notes[name]) {
        notes[name] = [];
      }
      res.render("dashBoard", { title: "dashboard", notes: notes[name] });
    });
    return;
  }
  name = req.session.username;
  if (!name) {
    res.redirect("/");
    return;
  }
  title = req.body.title;
  content = req.body.content;
  const newNote = new note(title, content);
  newNote.save(name, (notes) => {
    if (!notes[name]) {
      notes[name] = [];
    }
    req.session.addNote = false;
    res.render("dashBoard", { title: "dashboard", notes: notes[name] });
  });
};

exports.getAddNote = (req, res) => {
  req.session.addNote = true;
  res.render("addNote", { title: "addNote" , edit : false});
};

exports.getEditNote = (req,res) => {
  id = req.params.noteID
  name = req.session.username
  Note.fatchByID(id ,name ,  (notes) => {
    console.log(notes[0].title)
    console.log(notes[0].content)
    res.render("addNote" , { title: "editNote" , edit : "true" , noteTitle : notes[0].title , noteContent : notes[0].content , noteID : notes[0].id} )
  })
  
}

exports.postEditNote = (req,res) => {
  id = req.params.noteID 
  title = req.body.title
  content = req.body.content
  name = req.session.username

  Note.fatchAll((notes) => {
    if (!notes[name]) {
      notes[name] = [];
    }
    notes[name].forEach((note) => {
      if (note.id == id) {
        note.title = title
        note.content = content
      }
    })
    const filePath = path.join(rootDir, "data", "notes.json");
    fs.writeFile(filePath, JSON.stringify(notes), (error) => {
      res.redirect("/note/dashboard")
    });
  })
}

// exports.postAddNote = (req, res) => {};
