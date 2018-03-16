var express = require('express');
var router = express.Router();

/* GET all users. */
router.get('/all', function(req, res, next) {
    let response = { "status" : "success",  "message" : "success all" };
    res.send(response); res.end();
  //res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
    let response = { "status" : "success",  "message" : "success all" };
    res.send(response); res.end();
  //res.render('index', { title: 'Express' });
});

router.post('/create', function(req, res, next) {
    let response = { "status" : "success",  "message" : "success post" };
    res.send(response); res.end();
  //res.render('index', { title: 'Express' });
});

router.post('/update', function(req, res, next) {
    let response = { "status" : "success",  "message" : "success put" };
    res.send(response); res.end();
  //res.render('index', { title: 'Express' });
});

router.post('/:id', function(req, res, next) {
    let response = { "status" : "success",  "message" : "success delete" };
    res.send(response); res.end();
  //res.render('index', { title: 'Express' });
});


module.exports = router;
