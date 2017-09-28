// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var orm = require('../config/orm.js');

var burger = {
    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    create: (cols, vals, cb) => {
        orm.insertOne('burgers', cols, vals, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne('burgers', objColVals, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;