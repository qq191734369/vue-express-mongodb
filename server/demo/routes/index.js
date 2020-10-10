var express = require('express');
var router = express.Router();
const User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  const {
      username,
      password
  } = req.body
  User.findOne({
    userName: username,
    userPwd: password
  }, (err, doc) => {
    if (err) {
      res.json(
          {
            status: '1',
            msg: err.message
          }
      )
    } else  {
      if (doc) {
        res.cookie('userId', doc.userId, {
          path: '/',
          maxAge: 1000 * 60 * 60
        });
        res.json({
          status: '0',
          msg: '登录成功',
          result: {
            username: doc.userName
          }
        });
      } else  {
        res.json({
          status: '1',
          msg: '用户名或密码错误'
        });
      }
    }
  })
});

router.post('/logout' , function(req, res, next) {
  res.cookie('userId', '', {
    path: '/',
    maxAge: -1
  });
  res.json({
    status: '0',
    msg: '登出成功'
  })
});

router.get('/checkLogin' , function(req, res, next) {
  if (req.cookies.userId) {
    res.json({
      status: '0',
      msg: '已登录',
      result: req.cookies.userId
    });
  } else {
    res.json({
      status: '1',
      msg: '未登录',
      result: null
    });
  }
})

module.exports = router;
