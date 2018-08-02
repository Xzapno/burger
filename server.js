// Dependencies - npm packages that will give server functionality

    var express = require("express");
    var bodyParser = require("body-parser");

// Express configuration

    var PORT = process.env.PORT || 8080;

    var app = express();

// Serve static content for the app from the "public" directory in the application directory

    app.use(express.static("public"));

// Setup Express to handle dat parsing

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
    
// Setup Handlebars

    var exphbs = require("express-handlebars");

    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

// Import routes & give server access to them

    var routes = require("./controllers/burger_controller.js");
    app.use(routes);

// Start Server

    app.listen(PORT, function() {
        console.log("server listening on: http//localhost: " + PORT);
    });