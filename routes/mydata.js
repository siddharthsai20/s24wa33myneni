var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Your Full Name' }); // Replace 'Your Full Name' with your actual name
});

module.exports = router;
