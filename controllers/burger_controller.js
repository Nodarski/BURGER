var burger = require('../models/burger');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    burger.selectAll(function(data) {
        res.render('index', { burgers: data } );
    });
});

router.post('/insert', function (req, res) {
    burger.insertOne(req.body, function() {
        res.json({ redirect_url: "/"});
    });
});

router.put('/update', function (req, res) {
    burger.updateOne(req.body, function() {
        res.json({ redirect_url: "/"});
    });
});

module.exports = router;