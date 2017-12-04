/////////////////////////////////////////////// /* Import Data */ //////////////////////////////////////////////////////////
const path = require("path"); // Used to handle Path Directories

/////////////////////////////////////////////// /* HTML Get Routes */ //////////////////////////////////////////////////////////

 let htmlRoutes = (app) => {

   app.get("/", function(req, res) { //Handles Root Route
     console.log("Root Path Hit. Sending Home html File");
     res.sendFile(path.join(__dirname, "../public/home.html"));
   });

   app.get("/findingMatch.html", function(req, res) { //Handles findingMatch.html (survey.js) that gets Requested from windows.location.replace()
     console.log("Finding Match Path Hit. Sending findingMatch html File");
     res.sendFile(path.join(__dirname, "../public/findingMatch.html"));
   });

   app.get("/results.html", function(req, res) { //Handles results.html (findingMatch.js) that gets Requested from windows.location.replace()
     console.log("Results Path Hit. Sending results html File");
     res.sendFile(path.join(__dirname, "../public/results.html"));
   });

   app.get("/:path", (req, res) => { //Handles Sub Routes

    console.log("Sub Path Hit");

    let currentPath = req.params.path; // Get path input and store it in a variable
    console.log(`current Path is  ${currentPath}`);

    switch(currentPath){
      case "survey":
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        break;
      case "findingMatch":
         console.log("Sending url findingMatch.html link")
         res.send("/findingMatch.html");
         break;
      case "results":
         console.log("Sending url results.html link")
         res.send("/results.html");
      default:
         res.redirect("/"); // Redirect All Invalid URL to Root
        break;
    } // End Switch

 }); // End Get Request

}; // End of apiRoutes


/////////////////////////////////////////////// /* Exports */ //////////////////////////////////////////////////////////
module.exports = htmlRoutes;
