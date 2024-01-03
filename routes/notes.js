const express = require("express");
const router = express.Router();
//import controller
const {
    getNotes,
    createNotes,
    UpdateNotes,
    deleteNotes,
    getNotesById
} = require('../Controllers/createNotes');
const { auth, isAdmin } = require("../middlewares/auth");


// define api routes

//get routes
router.get('/notes', getNotes);

//get by id
router.get('/notes/:id', getNotesById)

//post routes
router.post('/notes', auth, createNotes);

//update request routes
router.put('/notes/:id', auth, UpdateNotes)

//delete Notes
router.delete('/notes/:id', auth, deleteNotes)


module.exports = router;