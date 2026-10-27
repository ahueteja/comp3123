const express = require('express');
const mongoose = require('mongoose');
const noteModel = require('../models/NotesModel');

const noteRoutes = express.Router();

// CREATE - Add a new note
noteRoutes.post('/notes', async (req, res) => {
    try {
        if (!req.body.content) {
            return res.status(400).json({
                message: "Note content can not be empty"
            });
        }

        const note = new noteModel(req.body.content);
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ - Retrieve all notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// READ - Retrieve one note by ID
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.noteId)) {
            return res.status(400).json({ message: "Invalid note ID" });
        }

        const note = await noteModel.findById(req.params.noteId);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE - Update a note by ID
noteRoutes.put('/notes/:noteId', async (req, res) => {
    try {
        if (!req.body.content) {
            return res.status(400).json({
                message: "Note content can not be empty"
            });
        }

        if (!mongoose.isValidObjectId(req.params.noteId)) {
            return res.status(400).json({ message: "Invalid note ID" });
        }

        const updatedNote = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            req.body.content,
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(updatedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE - Delete a note by ID
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.noteId)) {
            return res.status(400).json({ message: "Invalid note ID" });
        }

        const deletedNote = await noteModel.findByIdAndDelete(
            req.params.noteId
        );

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = noteRoutes;
