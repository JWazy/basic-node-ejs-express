// Basic Hello World with just NodeJS

// // Import http module
// var http = require('http');
//
// // Handle sending requests and returning responses
// function handleRequests(req, res) {
//   // Return string
//   res.end('Hello World!');
// }
//
// // Create the http server
// var server = http.createServer(handleRequests);
//
// // Start the server and listen on port 8080
// server.listen(8080, function() {
//   console.log('Listening on port 8080');
// });

////////////////////////////////////////////////////////
// NodeJS with Express
// Require our dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;
var router = require('./app/routes');

// Use EJS and Express Layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Route our app
app.use('/', router);

// Use EJS and Express Layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Set static files (css, images, etc.) location
app.use(express.static(__dirname + '/public'));

// Start the server
app.listen(port, function() {
  console.log('App started, listening on port ' + port + '.');
});
