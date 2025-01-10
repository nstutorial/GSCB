const mongoose = require('mongoose');
const Cashbook = require('../../models/Cashbook');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).catch(err => console.error(err));

 async function handler(req, res)  {
    if (req.method === 'POST') {
        try {
            const cashbook = new Cashbook(req.body);
            await cashbook.save();
            res.status(201).send({ message: 'Data saved successfully!' });
        } catch (error) {
            res.status(500).send({ error: 'Failed to save data.' });
        }
    } else {
        res.status(405).send({ message: 'Method not allowed api/cashbook/save' });
    }
}
module.exports = handler;