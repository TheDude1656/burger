// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var orm = require('../config/orm.js');

var burger = {
    all: (all, res) => {
        orm.selectAll('burgers', (data) => {
            all(data, res);
        });
    },
    create: (burger_name, makeBurger) => {
        orm.insertOne('burgers', burger_name, (res) => {
            makeBurger(res);
        });
    },
    update: (id, updateBurger) => {
        orm.updateOne('burgers', id, (res) => {
            updateBurger(res);
        });
    }
};

module.exports = burger;