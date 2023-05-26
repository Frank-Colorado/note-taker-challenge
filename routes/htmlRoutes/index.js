const router = require("express").Router();
const { displayNotes } = require("../../controllers/htmlController");

router.get("/notes", displayNotes);

module.exports = router;
