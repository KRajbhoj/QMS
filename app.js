var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');

var token = require('./routes/token');
var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());

app.all('/', function (req, res) {
  let response = {
    "status": "success",
    "message": "Successfully pinged"
  };
  res.send(response);
  res.end();
});

app.use('/token', token);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000")
})

module.exports = app;