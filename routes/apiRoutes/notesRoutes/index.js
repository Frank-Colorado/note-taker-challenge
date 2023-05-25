const router = require("express").Router();
const {
  getNotes,
  createNote,
  deleteNote,
} = require("../../../controllers/notesController");

router.route("/").get(getNotes).post(createNote).delete(deleteNote);

module.exports = router;
