var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 3306,
  database: "burgerDump",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to "+ con.config.database);
});

module.exports = con;