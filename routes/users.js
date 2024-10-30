var express = require('express');
var router = express.Router();

// Initialize variables
let value = 0;
let total = 1;

/* GET users page. */
router.get('/', function(req, res, next) {
  // Update variables each time the route is accessed
  value += 2;
  total += value;

  // Send the response with the current total
  res.send(`Total is: ${total}`);
});

module.exports = router;
