const fs = require("fs");
const path = require("path");

// This is a function called display notes that will display the notes.html file
const displayNotes = (req, res) => {
  // sendFile is a method that will send the file at the given path
  res.sendFile(path.join(__dirname, "..", "public", "notes.html"));
};

module.exports = { displayNotes };
