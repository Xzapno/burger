var msql = require("mysql");

var connection = mysql.createConnection({
    host: "localhose",
    port: 8080,
    user: "root",
    password: "rabbit12",
    database: "burgers_db"
});