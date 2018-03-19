'use strict';

const express = require('express');
const router = express.Router();

let userController = require('../api/user/userController');

router.get('/getAllUsers', (req,res,next) => {
  res.send('respond with a resource');
});

router.get('/:id', (req,res,next) => {
    res.send({ "status" : "success",  "message" : "success all" });
    res.end();
});

router.post('/signup', userController.registerUser);

router.post('/updateUser', (req,res,next) => {
    res.send({ "status" : "success",  "message" : "success put" });
    res.end();
});

router.post('/login', (req,res,next) => {
  res.send({ "status" : "success",  "message" : "success post" });
  res.end();
});


module.exports = router;
