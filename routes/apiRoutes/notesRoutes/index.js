const router = require("express").Router();
const {
  getNotes,
  createNote,
  deleteNote,
} = require("../../../controllers/notesController");

// these routes will be called with /api/notes
router
  .route("/")
  // GET request that returns all notes from the database
  .get(getNotes)
  // POST request that adds a new note to the database
  .post(createNote);

// DELETE request that deletes a note with a specific id
router.route("/:id").delete(deleteNote);

module.exports = router;
