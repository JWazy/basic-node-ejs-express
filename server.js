// Import http module
var http = require('http');

// Handle sending requests and returning responses
function handleRequests(req, res) {
  // Return string
  res.end('Hello World!');
}

// Create the http server
var server = http.createServer(handleRequests);

// Start the server and listen on port 8080
server.listen(8080, function() {
  console.log('Listening on port 8080');
});
