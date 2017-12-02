/////////////////////////////////////////////// /* Import Data */ //////////////////////////////////////////////////////////
const path = require("path"); // Used to handle Path Directories

/////////////////////////////////////////////// /* HTML Routes */ //////////////////////////////////////////////////////////

 let htmlRoutes = (app) => {
   ////////////////////// get Routes //////////////////////////
   app.get("/", function(req, res) { //Handles Root Route
     console.log("Root Path Hit");
     res.sendFile(path.join(__dirname, "../public/home.html"));
   });

   app.get("/findingMatch.html", function(req, res) { //Handles Root Route
     console.log("Finding Match Path Hit");
     res.sendFile(path.join(__dirname, "../public/findingMatch.html"));
   });

   app.get("/results.html", function(req, res) { //Handles Root Route
     console.log("Results Path Hit");
     res.sendFile(path.join(__dirname, "../public/results.html"));
   });

   app.get("/:path", (req, res) => { //Handles Sub Routes

    console.log("Sub Path Hit");

    let currentPath = req.params.path; // Get path input and store it in a variable
    console.log("current Path is " + currentPath);

    switch(currentPath){
      case "survey":
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        break;
      case "findingMatch":
         console.log("Sending url findingMatch.html")
         res.send("/findingMatch.html");
         break;
      case "results":
         console.log("Sending url results.html")
         res.send("/results.html");
      default:
         res.redirect("/"); // Redirect All Invalid URL to Root
        break;
    } // End Switch

 }); // End Get Request

}; // End of apiRoutes


/////////////////////////////////////////////// /* Exports */ //////////////////////////////////////////////////////////
module.exports = htmlRoutes;
