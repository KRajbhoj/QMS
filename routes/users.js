var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
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


router.post('/login', function(req, res, next) {
    let response = { "status" : "success",  "message" : "success post" };
    res.send(response); res.end();
  //res.render('index', { title: 'Express' });
});

router.post('/sineup', function(req, res, next) {
    let response = { "status" : "success",  "message" : "success post" };
    res.send(response); res.end();
  //res.render('index', { title: 'Express' });
});


module.exports = router;
