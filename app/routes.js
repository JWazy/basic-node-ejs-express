// Require express
var express = require('express');
var path = require('path');

// Create our router object
var router = express.Router();

// Export our router
module.exports = router;

// Route for our homepage
router.get('/', function(req, res) {
  res.render('pages/index');
});

// Route for our about page
router.get('/about', function(req, res) {
  res.render('pages/about');
});

// Route for our contact page
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {

});
