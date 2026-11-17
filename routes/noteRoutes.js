
const express = require("express");

const router = express.Router();

// Import Controller Functions

const {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
} = require("../controllers/noteController");


// GET ALL NOTES

router.get("/", getAllNotes);


// GET NOTE BY ID

router.get("/:id", getNoteById);


// CREATE NOTE

router.post("/", createNote);


// UPDATE NOTE

router.put("/:id", updateNote);


// DELETE NOTE

router.delete("/:id", deleteNote);


// Export Router

module.exports = router;
