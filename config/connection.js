var mysql = require('mysql');

var con = mysql.createConnection({
  host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "aenv0eeounfaczsk",
  password: "t9hiscdcesxxo3se",
  port: 3306,
  database: "nrli383nuquun4jq",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to "+ con.config.database);
});

module.exports = con;