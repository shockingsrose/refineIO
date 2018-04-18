var express = require('express');
var router = express.Router();

/* GET users listing. */
//在路由中，使用 ':'+ '参数名' 的方式来指定参数 并且可以通过req.params对象获取
router.get('/:id/:name', function(req, res, next) {
  let str = '';
  for (key in req.params) {
    str += req.params[key] + ' ';
  }
  res.send('respond with a resource' + str);
});

module.exports = router;
