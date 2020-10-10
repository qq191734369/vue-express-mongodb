var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cartList', function (req, res, next) {
  const userId = req.cookies.userId;
  User.findOne({userId}, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      if (doc) {
        res.json({
          status: '0',
          msg: '',
          result: doc.cartList
        })
      } else {
        res.json({
          status: '1',
          msg: '用户不存在'
        })
      }
    }
  })
})

module.exports = router;
