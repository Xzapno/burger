// Set up MySQL connection.

    var mysql = require("mysql");

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Rabbit12",
        database: "burgers_db"
    });

// Make COnnection

    connection.connect(function(err) {
        console.log("test")
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        console.log("connected as id " + connection.threadId);
    });

// Export connection for our ORM to use.

    module.exports = connection;