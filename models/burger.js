const orm = require('../config/orm');

const burger = {
    
    all: (cb) => {
        orm.selectAll('burgers', res => {
            cb(res);
        });
    }, 
    create: (col, val, cb) => {
        orm.insertOne('burgers', col, val, res => {
            cb(res);
        });
    },
    update: (obj, condition, cb) => {
        orm.updateOne('burgers', obj, condition, res => {
            cb(res);
        });
    },
};

module.exports = burger;