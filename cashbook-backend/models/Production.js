const mongoose = require('mongoose');

const ProductionSchema = new mongoose.Schema({
    productionType: { type: String, required: true },
    shapeName: { type: String, required: true },
    materialCost: { type: Number, required: true },
    labourUsed: { type: Number, required: true },
    labourCost: { type: Number, required: true },
    otherCost: { type: Number, required: true },
    productionCost: { type: Number, required: true },
    sellValue: { type: Number, required: true },
}, {
    timestamps: true,  // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Production', ProductionSchema);
