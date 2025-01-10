const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//post request
const cashbookRoutes = require('./api/cashbook/save');
const productionRoutes = require('./api/production/save');
const dueRegister = require('./api/dueregister/saveDue');
const savePurchae = require('./api/savePurchase')

// get request
const cashbookreports = require('./api/cashbook/report');
const purchaseReports = require('./api/purchaseReport');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected to Atlas'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/cashbook', cashbookRoutes);
app.use('/api/production/save', productionRoutes);
app.use('/api/dueregister/save', dueRegister);
app.use('/purchase', savePurchae);

// get reports (this is the correct way)
app.use('/reports', cashbookreports);
app.use('/purchase-report',purchaseReports);


// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
