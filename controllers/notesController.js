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

// This is a function called createNote that takes in the request and response objects as parameters.
const createNote = (req, res) => {
  // destructure the note from the request body
  const { id, title, text } = req.body;
  // fs.readFile() method reads the notes from db.json file
  fs.readFile(
    // path.join() method joins the path of the current file (notesController.js) with the path to the db.json file
    path.join(__dirname, "..", "db", "db.json"),
    "utf8",
    (err, notes) => {
      // check if there is an error
      if (err) {
        // if there is an error, the response status is set to 500 and the error is returned as json
        res.status(500).json({ err });
      }
      // parse the notes from the db.json file
      const parsedNotes = JSON.parse(notes);
      // set the id of the new note to the length of the parsedNotes array + 1
      id = parsedNotes.length + 1;
      // add the new note the user sent to the parsedNotes array
      parsedNotes.push({ id, title, text });
      // fs.writeFile() method writes the notes to db.json file
      fs.writeFile(
        // path.join() method joins the path of the current file (notesController.js) with the path to the db.json file
        path.join(__dirname, "..", "db", "db.json"),
        // JSON.stringify() method converts the parsedNotes array to JSON
        JSON.stringify(parsedNotes, null, 2),
        (err) => {
          if (err) {
            return res.status(500).json({ err });
          }
        }
      );
    }
  );
  // return the note the user sent as json
  res.json({ title, text });
};

// // This is a function called deleteNote that takes in the request and response objects as parameters.
const deleteNote = (req, res) => {};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
};
