var express = require('express');
var router = express.Router();
let data = {
  Code: 1,
  list: [1, 2, 3, 4, 5, 6, 7]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
