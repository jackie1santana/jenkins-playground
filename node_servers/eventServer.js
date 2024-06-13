const express = require('express');

function startEventServer() {
    const app = express();

    app.get('/events', (req, res) => {
        res.send('Event Server');
    });

    const port = 8006; // Unique port for Event Server
    app.listen(port, () => console.log(`Event Server started on port ${port}...`));
}

module.exports = startEventServer;
