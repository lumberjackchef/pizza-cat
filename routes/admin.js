"use strict";

let express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),

    routes = require('./admin-routes/index'),

    admin = express();
/* GET users listing. */
admin

  // views & engine setup
  .set('views', path.join(__dirname, '../public/admin-themes/default/templates'))
  .set('view engine', 'pug')

  // uncomment after placing your favicon in /public
  .use(favicon(path.join(__dirname, '../public', 'favicon.ico')))
  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, '../public')))

  // routing
  .use('/', routes)

  // catch 404 and forward to error handler
  .use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  })
;

// error handlers

// development error handler
// will print stacktrace
if (admin.get('env') === 'development') {
  admin.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
admin.use(function(err, req, res, next) {
  res
    .status(err.status || 500)
    .render('error', {
      message: err.message,
      error: {}
    })
  ;
});


module.exports = admin;
