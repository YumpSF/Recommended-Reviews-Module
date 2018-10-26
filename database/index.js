var mysql = require('mysql');

//connect to database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yump_SF'
});

connection.connect();

module.exports = connection;