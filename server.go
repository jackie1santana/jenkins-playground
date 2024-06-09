package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	port := 3500

	// Set up the server
	server := http.NewServeMux()

	// Define the GET route
	server.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, World!")
	})

	// Define the POST route
	server.HandleFunc("/post", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "This is a POST request!")
	})

	// Start the server
	log.Printf("Server is running on port %d", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), server))
}

// To run the server, execute the following command in the terminal:
// go run /C:/Users/jacki/dev/code-playground/server.go
