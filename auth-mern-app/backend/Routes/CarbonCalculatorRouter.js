const express = require('express');
const router = express.Router();
const { calculateCarbonFootprint } = require('../controllers/CarbonCalculatorController');

router.post('/', calculateCarbonFootprint); // POST method for calculation

module.exports = router;
