var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bcrypt = require('bcrypt');
const {body , validatorResult} = require('express-validator');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger-config.json');
const swaggerJSDoc = require('swagger-jsdoc');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var submitRouter = require('./routes/submits');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  '/app-docs',
  swaggerUi.serve,
  swaggerUi.setup(
      swaggerJSDoc({
          ...swaggerConfig,
          definition: {
              ...swaggerConfig['definition'],
              info: {
                  ...swaggerConfig['definition']['info'],
                  title: 'web_random' + " API Documentation"
                  
              }
          }
      }),
      {
          explorer: true,
      }
  )
)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/submits', require('./controllers/submits.controller'));

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

module.exports = app;
