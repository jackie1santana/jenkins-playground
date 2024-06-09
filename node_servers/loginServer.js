const express = require('express'); // Import the Express module to create the server

// Function to start the Login server with OAuth
function startLoginServer() {
    const app = express(); // Create a new Express application

    // Define a route for the Login server
    app.get('/', (req, res) => {
        res.send('Login Server with OAuth\n'); // Send the response body
    });

    // Listen on port 8003 for incoming requests
    app.listen(8003, () => {
        console.log(`Login Server with OAuth started by Worker ${process.pid} on port 8003`); // Log that the server has started
    });
}

// Export the function so it can be used in the main file
module.exports = startLoginServer;
