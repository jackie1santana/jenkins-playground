const express = require('express');

function startIOStreamServer() {
    const app = express();

    app.get('/stream', (req, res) => {
        res.send('IO Stream Server');
    });

    const port = 8003; // Unique port for IO Stream Server
    app.listen(port, () => console.log(`IO Stream Server started on port ${port}...`));
}

module.exports = startIOStreamServer;
