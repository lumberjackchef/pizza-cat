"use strict";

require('./db/connect');

let express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),

    routes = require('./routes/index'),
    admin = require('./routes/admin'),

    app = express();

// app init
app
  // views & engine setup
  .set('views', path.join(__dirname, 'public/themes/default/templates'))
  .set('view engine', 'pug')

  // uncomment after placing your favicon in /public
  .use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, 'public')))

  // routing
  .use('/', routes)
  .use('/admin', admin)

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
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res
    .status(err.status || 500)
    .render('error', {
      message: err.message,
      error: {}
    })
  ;
});


module.exports = app;
