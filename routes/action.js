var express = require('express');
var router = express.Router();
const fs = require('fs');
var format = require('date-format');

router.post('/register', (req, res, next) => {
  fs.readFile('./public/json/register_list.json', 'utf-8', (err, data) => {
    if (err) res.send('文件读取失败');
    else {
      let info = {
        userCode: req.cookies.userCode,
        createTime: format('yyyy-MM-dd hh:mm', new Date())
      };
      //判断数组中是否有该用户的数据
      let flag = false;

      let list = data ? JSON.parse(data) : [];

      if (list.length > 0) {
        list.forEach(element => {
          if (element.userCode === info.userCode) {
            element.times++;
            flag = true;
          }
        });
      }

      //如果没有该用户的数据 则新增一条
      if (!flag) {
        info.times = 1;
        list.push(info);
      }

      data = JSON.stringify(list);
      fs.writeFile('./public/json/register_list.json', data, err => {
        if (err) res.send(err);
        else {
          let data = {
            Code: 1,
            Message: '写入成功'
          };
          res.send(JSON.stringify(data));
        }
      });
    }
  });
});

router.post('/login', (req, res, next) => {
  fs.readFile('./public/json/login_list.json', 'utf-8', (err, data) => {
    if (err) res.send('文件读取失败');
    else {
      let info = {
        userCode: req.cookies.userCode,
        loginTime: format('yyyy-MM-dd hh:mm', new Date())
      };
      //判断数组中是否有该用户的数据
      let flag = false;

      let list = data ? JSON.parse(data) : [];

      if (list.length > 0) {
        list.forEach(element => {
          if (element.userCode === info.userCode) {
            element.times++;
            flag = true;
          }
        });
      }

      //如果没有该用户的数据 则新增一条
      if (!flag) {
        info.times = 1;
        list.push(info);
      }

      data = JSON.stringify(list);
      fs.writeFile('./public/json/login_list.json', data, err => {
        if (err) res.send(err);
        else {
          let data = {
            Code: 1,
            Message: '写入成功'
          };
          res.send(JSON.stringify(data));
        }
      });
    }
  });
});

router.post('/pay', (req, res, next) => {
  fs.readFile('./public/json/pay_list.json', 'utf-8', (err, data) => {
    if (err) res.send('文件读取失败');
    else {
      let info = {
        userCode: req.cookies.userCode,
        payTime: format('yyyy-MM-dd hh:mm', new Date())
      };
      //判断数组中是否有该用户的数据
      let flag = false;

      let list = data ? JSON.parse(data) : [];

      if (list.length > 0) {
        list.forEach(element => {
          if (element.userCode === info.userCode) {
            element.times++;
            flag = true;
          }
        });
      }

      //如果没有该用户的数据 则新增一条
      if (!flag) {
        info.times = 1;
        list.push(info);
      }

      data = JSON.stringify(list);
      fs.writeFile('./public/json/pay_list.json', data, err => {
        if (err) res.send(err);
        else {
          let data = {
            Code: 1,
            Message: '写入成功'
          };
          res.send(JSON.stringify(data));
        }
      });
    }
  });
});
module.exports = router;
