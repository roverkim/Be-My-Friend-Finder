/////////////////////////////////////////////// /*Require Packages*/ //////////////////////////////////////////////////////////
const express = require("express"); // Server
const bodyParser = require("body-parser"); // Allows for JSON Body from POST to be Accessed

// Initalise Express Server
const app = express();

// Set Port for Express and Heroku
let PORT = process.env.PORT || 8080;

// Add Additional Functionality to Express Using Middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/app", express.static(__dirname + '/app'));


// Require Routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
