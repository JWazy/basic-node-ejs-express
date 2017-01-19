// Require express
var express = require('express');

// Create our router object
var router = express.Router();

// Export our router
module.exports = router;

// Route for our homepage
router.get('/', function(req, res) {
  res.send('Hi friend!');
});

// Route for our about page
router.get('/about', function(req, res) {
  res.send('About Page');
});

// Route for our contact page
router.get('/contact', function(req, res) {
  res.send('Contact get');
});

router.post('/contact', function(req, res) {
  res.send('Contact post');
});
