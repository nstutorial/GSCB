const mongoose = require('mongoose');
const PurchaseBook = require('../models/Purchase');
require('dotenv').config();

// mongoose.connect(process.env.MONGO_URI).catch(err => console.error(err));

 async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const purchaseEntries = await PurchaseBook.find();
            res.json(purchaseEntries);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch cashbook entries' });
        }
    } else {
        res.status(405).send({ message: 'Method not allowed api/cashbook/report' });
    }
}
module.exports = handler;