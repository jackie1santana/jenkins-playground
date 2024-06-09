<?php

// FILEPATH: /c:/Users/jacki/dev/code-playground/server.php

// Create a server on port 5200
$server = new \Swoole\Http\Server("0.0.0.0", 5200);

// Handle GET request
$server->on("request", function ($request, $response) {
    if ($request->server['request_method'] === 'GET') {
        // Handle GET route
        $response->header("Content-Type", "text/plain");
        $response->end("This is a GET request");
    }
});

// Handle POST request
$server->on("request", function ($request, $response) {
    if ($request->server['request_method'] === 'POST') {
        // Handle POST route
        $response->header("Content-Type", "text/plain");
        $response->end("This is a POST request");
    }
});

// Start the server
$server->start();

# php -S localhost:8000

