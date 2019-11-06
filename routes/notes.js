const express = require("express");
const {getNotes, getNote, addNote, updateNote, deleteNote} = require('../controllers/notes');
const router = express.Router();


router.route('/')
    .get(getNotes)
    .post(addNote);
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;