const mongoose = require('mongoose');

const CashbookSchema = new mongoose.Schema({
    date: { type: String, required: true },
    openingBalance: { type: Number, required: true },
    closingBalance: { type: Number, required: true },
    credits: [
        {
            head: String,
            description: String,
            cash: Number,
            bank: Number,
        },
    ],
    debits: [
        {
            head: String,
            description: String,
            cash: Number,
            bank: Number,
        },
    ],
});

module.exports = mongoose.model('Cashbook', CashbookSchema);
