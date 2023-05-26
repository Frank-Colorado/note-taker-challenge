const fs = require("fs");
const path = require("path");

const displayNotes = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "notes.html"));
};

module.exports = { displayNotes };
