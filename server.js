var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
require('dotenv').config();
var connection = require("./config/connection.js")
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var mysql = require("mysql");


connection.connect((err) => {
    if (err) {
        console.error("Error Connecting to server: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

app.listen(port);