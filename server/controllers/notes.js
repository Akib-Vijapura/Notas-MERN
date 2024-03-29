const asyncHandler = require("express-async-handler");
// const res = require("express/lib/response");
const Note = require("../models/notes");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const note = new Note({ user: req.user._id, title, content });

    const createdNote = await note.save();

    res.status(201).json(createdNote);
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const { title, content  } = req.body;

  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    throw new Error("You can not perform this action");
  }

  if (note) {
    note.title = title;
    note.content = content;


    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    throw new Error("Note Not Found");
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    throw new Error("You can not perform this action");
  }

  if (note) {
    await note.remove();
    res.json({ message: "Note Removed Successfully" });
  } else {
    res.status(404);
    throw new Error("Note Not Found");
  }
});
module.exports = { getNotes, createNote, getNoteById, updateNote, deleteNote };
