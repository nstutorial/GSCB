const express = require('express');
const Production = require('../../models/Production');
const router = express.Router();

// Handle POST request to submit production data
router.post('/', async (req, res) => {
    try {
        const productionData = req.body; // The data sent in the request body
        
        // You can add your logic to save the data to the database here
        // For example: const production = await Production.create(productionData);
        // Save each production entry to the database
        for (const entry of productionData) {
            const production = new Production({
                productionType: entry.productionType,
                shapeName: entry.shapeName,
                materialCost: entry.materialCost,
                labourUsed: entry.labourUsed,
                labourCost: entry.labourCost,
                otherCost: entry.otherCost,
                productionCost: entry.productionCost,
                sellValue: entry.sellValue
            });
            await production.save(); // Save the production entry
        }

        // Send a JSON response back
        res.status(200).json({ message: 'Production data submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to submit production data.' });
    }
});

module.exports = router;
