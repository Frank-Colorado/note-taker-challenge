const fs = require("fs");
const path = require("path");

// This is a function called getNotes that takes in the request and response objects as parameters.
const getNotes = (req, res) => {
  // fs.readFile() method reads the notes from db.json file
  fs.readFile(
    // path.join() method joins the path of the current file (notesController.js) with the path to the db.json file
    path.join(__dirname, "..", "db", "db.json"),
    "utf8",
    (err, notes) => {
      // ternary operator that checks if there is an error
      // if there is an error, the response status is set to 500 and the error is returned as json
      // if there is no error, the notes are parsed from json and returned as json
      err ? res.status(500).json({ err }) : res.json(JSON.parse(notes));
    }
  );
};

const createNote = (req, res) => {};

const deleteNote = (req, res) => {};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
};
