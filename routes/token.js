var express = require('express');
var router = express.Router();

/* GET all users. */
router.get('/getAllTokens', function(req, res, next) {
    res.send({ "status" : "success",  "message" : "success all" });
    res.end();
});

router.post('/getToken', function(req, res, next) {
    res.send({ "status" : "success",  "message" : "success all" });
    res.end();
});

router.post('/createToken', function(req, res, next) {
    res.send({ "status" : "success",  "message" : "success post" });
    res.end();
});

router.post('/updateToken', function(req, res, next) {
    res.send({ "status" : "success",  "message" : "success put" });
    res.end();
});

module.exports = router;
