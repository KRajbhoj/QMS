'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');

var token = require('./routes/token');
var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());

app.all('/', (req,res) => {
  res.send({
    "status": "success",
    "message": "Successfully pinged der"
  });
  res.end();
});
app.use('/token', token);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000")
})
mongoose.connect('mongodb://localhost/tokenDB')
.then(()=>{
   useMongoClient: true;
  console.log("Connected to DB Success")
})
.catch((e)=>{
  console.log("Didint Conenccted to DB",e)
});


module.exports = app;
