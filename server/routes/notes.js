const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/notes");

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router
  .route("/:id")
  .get( getNoteById)
  .put(protect, updateNote)
  .delete(protect , deleteNote);
module.exports = router;
