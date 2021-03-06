var { basePath } = require('./configs/constants');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var goodsRouter = require('./routes/goods');

var app = express();

var initDatasource = require('./initDatasource');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 拦截
app.use(function (req, res, next) {
  if (req.cookies.userId) {
    next();
  } else {
    if (req.originalUrl == '/login' || req.originalUrl == 'logout' || req.path === basePath + '/goods') {
      next();
    } else {
      res.json({
        status: '10001',
        msg: '未登录',
        result: null
      })
    }
  }
})

app.use('/', indexRouter);
app.use(basePath + '/users', usersRouter);
app.use(basePath + '/goods', goodsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// init datasource
initDatasource();

module.exports = app;
