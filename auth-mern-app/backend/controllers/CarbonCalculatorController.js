// controllers/CarbonCalculatorController.js
const CarbonFootprint = require('../models/CarbonFootprint');

exports.calculateCarbonFootprint = async (req, res) => {
    const { electricity, diet, travel, dist } = req.body;

    // Validate Input
    if (!electricity || !diet || !travel || !dist) {
        return res.status(400).json({ error: 'Please provide electricity, diet, travel, and distance values.' });
    }

    // Carbon Calculation Logic
    const electricityCarbon = parseFloat(electricity) * 0.5;

    let dietCarbon = 0;
    if (diet === "vegan") dietCarbon = 4;
    else if (diet === "veg") dietCarbon = 5;
    else if (diet === "nonveg") dietCarbon = 7;
    else return res.status(400).json({ error: 'Invalid diet. Use vegan, veg, or nonveg.' });

    let travelCarbon = 0;
    if (travel === "bike") travelCarbon = parseFloat(dist) * 0.05;
    else if (travel === "petrol_car") travelCarbon = parseFloat(dist) * 0.18;
    else if (travel === "diesel_car") travelCarbon = parseFloat(dist) * 0.20;
    else if (travel === "bus") travelCarbon = parseFloat(dist) * 0.10;
    else if (travel === "metro") travelCarbon = parseFloat(dist) * 0.04;
    else return res.status(400).json({ error: 'Invalid travel option.' });

    const totalCarbon = electricityCarbon + dietCarbon + travelCarbon;

    // Save Data to MongoDB
    try {
        const newRecord = new CarbonFootprint({
            electricity: parseFloat(electricity),
            diet,
            travel,
            distance: parseFloat(dist),
            totalCarbon,
        });

        await newRecord.save();
        res.status(200).json({ totalCarbon, message: 'Data saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save data.' });
    }
};
