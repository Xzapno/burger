var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhose",
    port: 8080,
    user: "root",
    password: "rabbit12",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " = err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;