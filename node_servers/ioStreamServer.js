const express = require('express'); // Import the Express module to create the server
const fs = require('fs'); // Import the File System module for streaming

// Function to start the IO Stream server
function startIOStreamServer() {
    const app = express(); // Create a new Express application

    // Define a route for the IO Stream server
    app.get('/stream', (req, res) => {
        const readStream = fs.createReadStream('largefile.txt'); // Create a readable stream from a large file
        readStream.pipe(res); // Pipe the readable stream to the response
    });

    // Listen on port 8005 for incoming requests
    app.listen(8005, () => {
        console.log(`IO Stream Server started by Worker ${process.pid} on port 8005`); // Log that the server has started
    });
}

// Export the function so it can be used in the main file
module.exports = startIOStreamServer;
