const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  supplierName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pricePerUnit: {
    type: Number,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  }
});

// Calculate totalCost before saving the document
inventorySchema.pre('save', function(next) {
  this.totalCost = this.quantity * this.pricePerUnit;
  next();
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
