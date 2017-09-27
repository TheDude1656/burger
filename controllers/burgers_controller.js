// dependencies for routing
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', (req, res) => {
    res.redirect('/burgers');
});

router.get('/burgers', (req, res) => {
    burger.all((data, res) => {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', (req, res) => {
    console.log(req.body.burger_name, " =entered name for burger")
    burger.create('burger_name', req.body.burger_name, () => {
        res.redirect('/burgers');
    });
});

router.put('/burgers/update/:id', (req, res) => {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, () => {
        res.redirect('/burgers');
    });
});

module.exports = router;