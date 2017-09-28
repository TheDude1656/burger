// dependencies for routing
var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', (req, res) => {
    console.log(req.body.burger_name, " =entered name for burger")
    burger.create('burger_name', req.body.burger_name, () => {
        res.redirect('/');
    });
});

router.put('/burgers/update/:id', (req, res) => {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, () => {
        res.redirect('/');
    });
});

module.exports = router;