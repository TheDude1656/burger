var mysql = require("mysql");


var selectAll = () => {
    app.get("/", (req, res) => {
        connection.query('SELECT * FROM burgers;', (err, data) => {
            if (err) {
                throw err;
            }
            res.render("index", {
                plans: data
            });
        });
    });
};

var insertOne = () => {
    app.post("/", (req, res) => {
        connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], (err, result) => {
            if (err) {
                throw err;
            }
            res.redirect("/");
        });
    });
};

var updateOne = () => {
    app.put("/", (req, res) => {
        connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.body.id], (err, results) => {
            if (err) {
                throw err;
            }
            res.redirect("/");
        });
    });
};

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};