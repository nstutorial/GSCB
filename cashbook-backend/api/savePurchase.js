// Assuming you're using mongoose for MongoDB

const express = require('express');
const router = express.Router();
const Purchase = require('../models/Purchase'); // Assuming you have a Purchase model

// Save Purchase
router.post('/', async (req, res) => {
    try {
        const purchases = req.body; // Array of purchase data
        // Save each purchase to the database
        await Purchase.insertMany(purchases);
        res.status(200).json({ message: "Purchases saved successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error saving purchases." });
    }
});

module.exports = router;
