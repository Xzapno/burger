// Dependencies

    var express = require("express");
    var router = express.Router();

// Import model for database access

    var burger = require("../models/burger.js");

// Create routes

    router.get("/", function(req, res) {
        burger.all(function(data) {
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

// Export routes for server.js to use

    module.exports = router;