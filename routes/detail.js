var express = require('express');
var router = express.Router();

var list = [1, 2, 3];
router.get('/', (req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
  let data = JSON.stringify(list);
  var callback = 'callbackFunction' + '(' + data + ');';
  res.end(callback);
});

module.exports = router;
