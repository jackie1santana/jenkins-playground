const express = require('express');
const http = require('http');
const WebSocket = require('ws');

function startWebSocketChatServer() {
    const app = express();
    const server = http.createServer(app);
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });
    });

    const port = 8005; // Unique port for WebSocket Chat Server
    server.listen(port, () => console.log(`WebSocket Chat Server started on port ${port}...`));
}

module.exports = startWebSocketChatServer;
