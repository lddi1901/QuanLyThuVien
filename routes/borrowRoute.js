const express = require('express');
const Borrow = require('../models/borrow'); // Import model
const router = express.Router();

// Lấy danh sách mượn sách
router.get('/', async (req, res) => {
    try {
        const borrows = await Borrow.find().populate('user').populate('book');
        res.json(borrows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Thêm một bản ghi mượn sách
router.post('/', async (req, res) => {
    try {
        const newBorrow = new Borrow(req.body);
        await newBorrow.save();
        res.status(201).json(newBorrow);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router; 
