var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/register', (req, res, err) => {
  fs.readFile('./public/json/register_list.json', 'utf-8', (err, data) => {
    if (err) res.send('文件读取失败');
    else {
      //   let list = data ? JSON.parse(data) : [];
      res.send(data);
    }
  });
});

router.post('/login', (req, res, err) => {
  fs.readFile('./public/json/login_list.json', 'utf-8', (err, data) => {
    if (err) res.send('文件读取失败');
    else {
      //   let list = data ? JSON.parse(data) : [];
      res.send(data);
    }
  });
});

router.post('/pay', (req, res, err) => {
  fs.readFile('./public/json/pay_list.json', 'utf-8', (err, data) => {
    if (err) res.send('文件读取失败');
    else {
      //   let list = data ? JSON.parse(data) : [];
      res.send(data);
    }
  });
});

router.post('getLogisticsInfo', (req, res, err) => {
  if (err) res.send(err);
  else {
    res.send(res);
  }
});

router.post('getUserId', (req, res, next) => {
  res.send(req.body);
});

module.exports = router;
