// connection for the mysql server
var mysql = require("mysql");
require('dotenv').config();


var connection = mysql.createConnection({
    host: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "burgers_db"
});

// connection success or error
connection.connect((err) => {
    if (err) {
        console.error("Error Connecting " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;