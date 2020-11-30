var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var moviesRouter= require('./routes/movie');
var advancedSearch= require('./routes/advanced-search');

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/movie', moviesRouter);
app.use('/advanced-search', advancedSearch);


app.get('/movie', function(req, res){
    res.sendFile(path.join(__dirname, '/routes/movie.js'))
});

app.get('/advanced-search', function(req, res){
    res.sendFile(path.join(__dirname, '/routes/advanced-search.js'))
});

app.listen(3000, function () {
  console.log('Porta Aperta');
});

module.exports = app;
