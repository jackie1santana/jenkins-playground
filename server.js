const cluster = require('cluster');
const os = require('os');

// Import server functions from their respective modules
const startLoginServer = require('./node_servers/loginServer');
const startWeatherServer = require('./node_servers/weatherServer');
const startIOStreamServer = require('./node_servers/ioStreamServer');
const startFileUploadServer = require('./node_servers/fileUploadServer');
const startWebSocketChatServer = require('./node_servers/webSocketChatServer');
const startEventServer = require('./node_servers/eventServer'); // Ensure this module exists

if (cluster.isMaster) {
    // The master process is responsible for forking worker processes
    const numCPUs = os.cpus().length; // Use the number of CPU cores
    console.log(`The operating system has ${numCPUs} cores`);

    // Fork the number of worker processes defined above
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork(); // Fork a new worker process
    }

    // Listen for the 'exit' event on the cluster
    cluster.on('exit', (worker, code, signal) => {
        console.error(`Worker ${worker.process.pid} died`); // Log the PID of the worker that died
        console.trace(); // Trace the error for debugging purposes
        cluster.fork(); // Fork a new worker to replace the one that died
    });
} else {
    // Get the worker ID to assign a specific server to each worker
    const workerId = cluster.worker.id;

    // Assign servers based on worker ID
    if (workerId === 1 || workerId === 2) {
        // startFileUploadServer(); // Workers 1-2 will handle the File Upload server
    } else if (workerId === 3 || workerId === 4) {
        // startWebSocketChatServer(); // Workers 3-4 will handle the WebSocket Chat server
    } else if (workerId === 5 || workerId === 6) {
        startLoginServer(); // Workers 5-6 will handle the Login server with OAuth
    } else if (workerId === 7 || workerId === 8) {
        startWeatherServer(); // Workers 7-8 will handle the Weather API server
    } else if (workerId === 9 || workerId === 10) {
        // startIOStreamServer(); // Workers 9-10 will handle the IO Stream server
    } else {
        // startEventServer(); // Any remaining workers will handle the Event server
    }
}
