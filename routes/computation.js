var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  let x = Math.random() * 100;
  if (req.query.x) {
    x = parseFloat(req.query.x);
  }
  const result = Math.trunc(x);
  res.send(`Math.trunc applied to ${x} is ${result}`);
});

module.exports = router;
