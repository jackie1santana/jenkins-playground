const express = require('express');

function startWeatherServer() {
    const app = express();

    app.get('/weather', (req, res) => {
        res.send('Weather API Server');
    });

    const port = 8002; // Unique port for Weather Server
    app.listen(port, () => console.log(`Weather API Server started on port ${port}...`));
}

module.exports = startWeatherServer;
