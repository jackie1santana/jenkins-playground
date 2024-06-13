const express = require('express'); // Import the Express module to create the server

// Function to start the To-do list server
function startToDoServer() {
    const app = express(); // Create a new Express application

    // Define a route for the To-do list server
    app.get('/', (req, res) => {
        res.send('To-do List Server\n'); // Send the response body
    });

    // Listen on port 8001 for incoming requests
    app.listen(8001, () => {
        console.log(`To-do List Server started by Worker ${process.pid} on port 8001`); // Log that the server has started
    });
}

// Export the function so it can be used in the main file
module.exports = startToDoServer;
