// dependencies for app
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
require('dotenv').config();


var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

// override method of DELETE for the POST
app.use(methodOverride('_method'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// setting up routes for the use of the app
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);



// starting the server
var port = process.env.PORT || 3000;
app.listen(port);