const express = require('express');
const DueRegister = require('../../models/Duebook');

const router = express.Router();

// Handle POST request to submit production data
router.post('/', async (req, res) => {
    try {
        const dueData = req.body;

        if (!Array.isArray(dueData) || dueData.length === 0) {
            return res.status(400).json({ error: 'Invalid or empty data submitted.' });
        }

        for (const entry of dueData) {
            if (!entry.dueName || !entry.dueAmount || !entry.paidAmount || !entry.remainingAmount || !entry.dueDate) {
                return res.status(400).json({ error: 'Missing required fields in entry.' });
            }

            const dueRegister = new DueRegister({
                dueName: entry.dueName,
                dueAmount: entry.dueAmount,
                paidAmount: entry.paidAmount,
                remainingAmount: entry.remainingAmount,
                dueDate: entry.dueDate,
                paymentDate: entry.paymentDate || null,
                remarks: entry.remarks || '',
            });

            await dueRegister.save();
        }

        res.status(200).json({ message: 'Due data submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to submit due data.' });
    }
});

module.exports = router;
