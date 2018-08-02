// Import mySQL connection

    var connection = require("../config/connection.js")

// Object for all our SQL statement functions.

    var orm = {
        
        selectAll: function(field, table, cb) {
            var queryString = "SELECT ?? FROM ??";
            connection.query(queryString, [field, table], function(err, result) {
                if (err) throw err;
                cb(result);
            });
        },

        insertOne: function() {

        },
    }

// Export the orm object for the model (burger.js).

    module.exports = orm;
    