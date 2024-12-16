const express = require('express');
const router = express.Router();
const noteControllers = require('../controllers/noteControllers');

router.get('/', noteControllers.getAllNotes);
router.get('/:id', noteControllers.getNoteById);
router.post('/', noteControllers.createNote);
router.put('/:id', noteControllers.updateNote);
router.delete('/:id', noteControllers.deleteNote);

module.exports = router;