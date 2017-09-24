var mysql = require("mysql");
require('dotenv').config();


var connection = mysql.createConnection({
    host: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "burgers_db"
});


module.exports = connection;