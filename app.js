var express = require('express');
var expressValidator=require('express-validator');
var indexRouter = require('./routes/index');
var unitManipulatorRouter = require('./routes/unitManipulator');

var app = express();


app.use(express.json());
app.use(expressValidator());

app.use('/', indexRouter);
app.use('/unitManipulator', unitManipulatorRouter);

module.exports = app;
