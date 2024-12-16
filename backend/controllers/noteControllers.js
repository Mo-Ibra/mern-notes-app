const Note = require('../models/note');

// Get All Notes API
exports.getAllNotes = async (req, res) => {
  try {

    const notes = await Note.findAll();

    if (!notes) {
      return res.status(404).json({ message: 'No notes found' });
    }

    return res.status(200).json(notes);

  } catch(err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

// Get Note by ID API
exports.getNoteById = async (req, res) => {
  try {

    const note = await Note.findByPk(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    return res.status(200).json(note);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
}

// Create Note API
exports.createNote = async (req, res) => {
  try {

    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const note = await Note.create({ title, content });

    return res.status(201).json(note);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
}

// Update Note API
exports.updateNote = async (req, res) => {
  try {

    const note = await Note.findByPk(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    await note.update({ title, content });

    return res.status(200).json(note);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
}

// Delete Note API
exports.deleteNote = async (req, res) => {
  try {

    const { validation } = req.body;

    const note = await Note.findByPk(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    if (validation !== 'delete') {
      return res.status(403).json({ message: 'You are not authorized to delete this note' });
    }

    await note.destroy();

    return res.status(204).send();

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
}