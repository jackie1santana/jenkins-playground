const express = require('express');

function startWeatherServer() {
    const app = express();
    app.get('/weather', (req, res) => {
        res.send('Weather API Server');
    });
    return app.listen(4000);  // Ensure this line correctly returns the server instance
}

module.exports = startWeatherServer;

// const cluster = require('cluster');
// const os = require('os');

// // Import server functions from their respective modules
// const startLoginServer = require('./node_servers/loginServer');
// const startWeatherServer = require('./node_servers/weatherServer');
// const startIOStreamServer = require('./node_servers/ioStreamServer');
// const startFileUploadServer = require('./node_servers/fileUploadServer');
// const startWebSocketChatServer = require('./node_servers/webSocketChatServer');
// const startEventServer = require('./node_servers/eventServer');

// if (cluster.isMaster) {
//     // The master process is responsible for forking worker processes
//     const numCPUs = os.cpus().length; // Use the number of CPU cores
//     console.log(`The operating system has ${numCPUs} cores`);

//     // Fork the number of worker processes defined above
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork(); // Fork a new worker process
//     }

//     // Listen for the 'exit' event on the cluster
//     cluster.on('exit', (worker, code, signal) => {
//         console.error(`Worker ${worker.process.pid} died`); // Log the PID of the worker that died
//         console.trace(); // Trace the error for debugging purposes
//         cluster.fork(); // Fork a new worker to replace the one that died
//     });
// } else {
//     // Get the worker ID to assign a specific server to each worker
//     const workerId = cluster.worker.id;

//     // Assign servers based on worker ID and ensure each has a unique port
//     if (workerId === 1) {
//         // startLoginServer(); // Worker 1 will handle the Login server
//     } else if (workerId === 2) {
//         startWeatherServer(); // Worker 2 will handle the Weather server
//     } else if (workerId === 3) {
//         startIOStreamServer(); // Worker 3 will handle the IO Stream server
//     } else if (workerId === 4) {
//         // startFileUploadServer(); // Worker 4 will handle the File Upload server
//     } else if (workerId === 5) {
//         // startWebSocketChatServer(); // Worker 5 will handle the WebSocket Chat server
//     } else if (workerId === 6) {
//         // startEventServer(); // Worker 6 will handle the Event server
//     } else {
//         console.log(`Worker ${workerId} has no assigned server.`);
//     }
// }
