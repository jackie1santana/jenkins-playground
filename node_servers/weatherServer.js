const express = require('express'); // Import the Express module to create the server

// Function to start the Weather API server
function startWeatherServer() {
    const app = express(); // Create a new Express application

    // Mock weather data
    const mockWeatherData = {
        temperature: 25, // Mock temperature data
        condition: 'Sunny' // Mock weather condition
    };

    // Define a route for the Weather API server
    app.get('/', (req, res) => {
        res.json(mockWeatherData); // Send the mock weather data as JSON
    });

    // Listen on port 8004 for incoming requests
    app.listen(8004, () => {
        console.log(`Weather API Server started by Worker ${process.pid} on port 8004`); // Log that the server has started
    });
}

// Export the function so it can be used in the main file
module.exports = startWeatherServer;
