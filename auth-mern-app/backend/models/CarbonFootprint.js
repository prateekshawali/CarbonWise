// models/CarbonFootprint.js
const mongoose = require('mongoose');

const CarbonFootprintSchema = new mongoose.Schema({
    electricity: Number,
    diet: String,
    travel: String,
    distance: Number,
    totalCarbon: Number
});

module.exports = mongoose.model('CarbonFootprint', CarbonFootprintSchema);
