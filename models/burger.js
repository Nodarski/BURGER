var orm = require('../config/orm');

var burgerOrm = new orm('burgers');
var burger = {};

burger.selectAll = function(callback) {
    burgerOrm.selectAll(function(data) {
        callback(data);
    });
};

burger.insertOne = function(reqBody, callback) {
    burgerOrm.insertOne(reqBody);
    callback();
};

burger.updateOne = function(reqBody, callback) {
    burgerOrm.updateOne(reqBody);
    callback();
};

module.exports = burger;