const express = require('express');
const Task = require('../models/taskModel');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to authenticate users
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'] ? .split(' ')[1];
    if (!token) return res.status(403).json({ message: 'No token provided' });
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.userId = decoded.userId;
        next();
    });
};

// Create a new task
router.post('/', authenticate, async(req, res) => {
    const { title, description } = req.body;
    try {
        const task = new Task({ title, description, user: req.userId });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
});

// Get all tasks for a user
router.get('/', authenticate, async(req, res) => {
    try {
        const tasks = await Task.find({ user: req.userId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
});

// Update a task
router.put('/:id', authenticate, async(req, res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id, user: req.userId },
            req.body, { new: true }
        );
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
});

// Delete a task
router.delete('/:id', authenticate, async(req, res) => {
    try {
        await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
});

module.exports = router;