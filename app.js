var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local').Strategy;
const passport = require('./app_server/config/passport');


require('./app_api/models/db');
const index = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');

var app = express();

app.set('views', path.join(__dirname, 'app_server', 'Views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public')));

app.use('/api', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  });

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use('/', index);
app.use('/api', apiRoutes);

app.use(function(req, res, next) {
  next(createError(404));
}); 

app.post('/Login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/Login',
    failureFlash: false
  })
);

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
