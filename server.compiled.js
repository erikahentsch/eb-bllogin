"use strict";

var express = require('express');

var path = require('path');

require('babel-polyfill');

require('dotenv').config();

var PORT = process.env.HTTP_PORT || 8080;
var app = express();
app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.use('static', express["static"](path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.send({
    message: 'flowers smell nice'
  });
  console.log('call');
});
app.get('/api', function (req, res) {
  res.send({
    message: 'flowers smell nice'
  });
  console.log('call');
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
