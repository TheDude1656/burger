var connection = require("./connection.js");


var orm = {

    selectAll: () => {
        connection.query('SELECT * FROM burgers;', (err, result) => {
            if (err) throw err;

        });

    },
    insertOne: (burger_name) => {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], (err, result) => {
            if (err) throw err;

        });
    },

    updateOne: (burger_name, id) => {
        connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.burger_name, req.body.id], (err, results) => {
            if (err) throw err;
        });
    }
}
module.exports = orm;