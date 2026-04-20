const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const express = require('express')

module.exports = class Note {
    /**
   * Represents a note.
   * @param {string} title - The title of the note.
   * @param {string} content - The content of the note.
   */

    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    save(name , callback) {
        this.id = (parseInt(Math.random()*10000)).toString()
        // console.log(this , name)
        Note.fatchAll((notes) => {
            if (!notes[name]) {
                notes[name] = [];
            }
            notes[name].push(this);
            const filePath = path.join(rootDir, "data", "notes.json");
            fs.writeFile(filePath, JSON.stringify(notes), (error) => {
                callback(notes);
            });
        });
    }

    

    static fatchAll(callback) {
        const filePath = path.join(rootDir, "data", "notes.json");
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                callback({});
            } else {
                callback(JSON.parse(data));
            }
        });
    }

    static fatchByID(id ,name ,  callback) {
        const filePath = path.join(rootDir, "data", "notes.json");
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                callback({});
            } else {
                if (!name) {
                    console.log("no name")
                    return;
                }
                let notes = JSON.parse(data)
                console.log(notes[name])
                let note = notes[name].filter((note) => {
                    if (note.id == id) {
                        return note;
                    }
                })
                console.log(note)
                callback(note)
            }
        });
    }
}