// Create web server
// Create a web server that listens on port 3000 and outputs a message when it is running.

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Server is running');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Run the server using the following command:
// node comment.js

// Output:
// Server is running on port 3000

// Open your browser and go to http://localhost:3000 to see the message "Server is running".
// The server is running and listening on port 3000.

// Path: comment.js
// Create a web server that returns a JSON object
// Create a web server that listens on port 3000 and returns a JSON object when it receives a request.
