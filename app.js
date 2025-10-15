var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars = require('hbs');
var session = require('express-session');
var passport = require('passport');

require('dotenv').config();

// Routers
var indexRouter  = require('./app_server/routes/index');
var usersRouter  = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var aboutRouter  = require('./app_server/routes/about');
var roomsRouter  = require('./app_server/routes/rooms');
var contactRouter= require('./app_server/routes/contact');
var mealsRouter  = require('./app_server/routes/meals');
var newsRouter   = require('./app_server/routes/news');
var loginRouter  = require('./app_server/routes/login');
var apiRouter    = require('./app_api/routes/index');
var registerRouter = require('./app_server/routes/register');

// Passport + DB
require('./app_api/config/passport');
require('./app_api/models/db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
handlebars.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));
app.set('view engine', 'hbs');

// Core middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// Sessions
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true }
}));

// Expose login state to all HBS views
app.use((req, res, next) => {
  res.locals.loggedIn = !!req.session.user;
  next();
});

// CORS for API
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Routes
app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/about', aboutRouter);
app.use('/rooms', roomsRouter);
app.use('/contact', contactRouter);
app.use('/meals', mealsRouter);
app.use('/news', newsRouter);
app.use('/api', apiRouter);

// 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Unauthorized -> 401 JSON
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ message: `${err.name}: ${err.message}` });
  }
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
