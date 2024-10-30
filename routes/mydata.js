// routes/mydata.js
const express = require('express');
const router = express.Router();

// Define the route for '/mydata'
router.get('/', (req, res) => {
  res.render('mydata', { title: 'sidhuu' }); // Replace with your full name
});

module.exports = router;