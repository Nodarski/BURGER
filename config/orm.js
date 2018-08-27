
var connection = require('./connection');

module.exports = function orm(table) {

    this.connection = connection;
    this.table = table;

    this.selectAll = function(callback) {
        
        var query = `SELECT * FROM ${this.table}`;

        connection.query(query, function(err, data) {
            if (err) throw err;
            else {
                callback(data);
            }
        });

    }

    this.insertOne = function(reqBody) {

        var query = `INSERT INTO ${this.table} (burgerName, inBelly) VALUES (?, ?)`;

        connection.query(query, [reqBody.burgerName, reqBody.inBelly], function(err, data) {
            if (err) throw err;
        });

    }

    this.updateOne = function(reqBody) {

        var query = `UPDATE ${this.table} SET inBelly = true WHERE burgerName = ?`;

        connection.query(query, [reqBody.burgerName], function(err, data) {
            if (err) throw err;
        });

    }

};