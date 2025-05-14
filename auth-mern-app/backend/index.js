const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const  projectRoutes = require('./Routes/Projects')
const CarbonCalculatorRouter = require('./Routes/CarbonCalculatorRouter');
require('dotenv').config();
require('./models/db');
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/auth', AuthRouter);
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

// routes
app.use('/api/projects', projectRoutes)
app.use('/home', CarbonCalculatorRouter); // Add the route
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});