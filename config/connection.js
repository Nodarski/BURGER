var mysql = require('mysql');

var con;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    con = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: "",
        database: "burgerDump",
    });
};


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to "+ con.config.database);
});

module.exports = con;