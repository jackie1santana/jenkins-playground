const express = require('express');

function startLoginServer() {
    const app = express();

    app.get('/login', (req, res) => {
        res.send('Login Server with OAuth');
    });

    const port = 8001; // Unique port for Login Server
    app.listen(port, () => console.log(`Login Server with OAuth started on port ${port}...`));
}

module.exports = startLoginServer;
