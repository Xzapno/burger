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

    router.post("api/burgers/post", function(req, res) {
        burger.create([req.body.name], function(result){
            res.json({ id: result.insertId });
        });
    });

    router.put("api/burgers/;id", function(result) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
    })

    router.delete("api/burger/:id", function(req, res) {
        var conditioni = "id = " + req.params.id;

        burger.delete(condition, function(result) {
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

// Export routes for server.js to use

    module.exports = router;