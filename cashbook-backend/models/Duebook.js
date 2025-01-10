const mongoose = require('mongoose');

const dueRegisterSchema = new mongoose.Schema({
    dueName: {
        type: String,
        required: true,
    },
    dueAmount: {
        type: Number,
        required: true,
        min: [0, 'Due Amount cannot be negative'],
    },
    paidAmount: {
        type: Number,
        required: true,
        min: [0, 'Paid Amount cannot be negative'],
    },
    remainingAmount: {
        type: Number,
        required: true,
        min: [0, 'Remaining Amount cannot be negative'],
    },
    dueDate: {
        type: Date,
        required: true,
    },
    paymentDate: {
        type: Date,
        required: false, // Optional field as it might not always be available
    },
    remarks: {
        type: String,
        required: false, // Optional field for any additional remarks
    }
}, {
    timestamps: true, // This will add 'createdAt' and 'updatedAt' fields automatically
});

// Create the DueRegister model using the schema
const DueRegister = mongoose.model('DueRegister', dueRegisterSchema);

module.exports = DueRegister;
