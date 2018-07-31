var connection = require("./connection.js")

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

module.exports(orm);