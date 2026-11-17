
// In-memory notes array

let notes = [

  {
    id: 1,
    title: "Learn JavaScript",
    content: "Practice JavaScript basics",
    category: "Learning"
  },

  {
    id: 2,
    title: "Learn React",
    content: "Practice React hooks and components",
    category: "Development"
  },

  {
    id: 3,
    title: "Complete Assignment",
    content: "Finish Node.js REST API assignment",
    category: "Assignment"
  }

];


// GET ALL NOTES

const getAllNotes = (req, res) => {

  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes
  });

};


// GET SINGLE NOTE

const getNoteById = (req, res) => {

  const id = Number(req.params.id);

  const note = notes.find(
    (item) => item.id === id
  );

  if (!note) {

    return res.status(404).json({
      message: "Note not found"
    });

  }

  res.status(200).json({
    message: "Note fetched successfully",
    note: note
  });

};


// CREATE NOTE

const createNote = (req, res) => {

  const { title, content, category } = req.body;

  if (!title || !content || !category) {

    return res.status(400).json({
      message: "Title, content and category are required"
    });

  }

  const newNote = {

    id: Date.now(),

    title: title,

    content: content,

    category: category

  };

  notes.push(newNote);

  res.status(201).json({
    message: "Note created successfully",
    note: newNote
  });

};


// UPDATE NOTE

const updateNote = (req, res) => {

  const id = Number(req.params.id);

  const note = notes.find(
    (item) => item.id === id
  );

  if (!note) {

    return res.status(404).json({
      message: "Note not found"
    });

  }

  const { title, content, category } = req.body;

  if (title !== undefined) {
    note.title = title;
  }

  if (content !== undefined) {
    note.content = content;
  }

  if (category !== undefined) {
    note.category = category;
  }

  res.status(200).json({
    message: "Note updated successfully",
    note: note
  });

};


// DELETE NOTE

const deleteNote = (req, res) => {

  const id = Number(req.params.id);

  const note = notes.find(
    (item) => item.id === id
  );

  if (!note) {

    return res.status(404).json({
      message: "Note not found"
    });

  }

  notes = notes.filter(
    (item) => item.id !== id
  );

  res.status(200).json({
    message: "Note deleted successfully"
  });

};


// EXPORT FUNCTIONS

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
};
