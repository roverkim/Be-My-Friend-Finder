/////////////////////////////////////////////// /* Import Data */ //////////////////////////////////////////////////////////
const path = require("path"); // Used to handle Path Directories
const friendsArray = require("../data/friends.js")

/////////////////////////////////////////////// /* API Routes */ //////////////////////////////////////////////////////////
let apiRoutes= (app) => {

  // Base path
  app.get("/api/:friends", (req, res) => {
    console.log("friends hit");
    let currentPath = req.params.friends;

    switch(currentPath){
      case "friends":
        res.json(friendsArray)
        break;
      default:
         res.redirect("/"); // Redirect All Invalid URL to Root
        break;
    } // End Switch
  });

  ///////////////////////// Post Routes /////////////////////////////
  app.post("/api/addUser", (req, res)=>{
    console.log("Post Friends Path Hit");
    let newUser = req.body; //Added JSON.stringify() to $.post data to bypass a weird occurance. However, this causes the enitre posted object to be set as a prop name within another object.
    // For Some Weird Reason, when an Array gets Posted from $.post, a [] symbol is added to the scores prop name.
    //{ '{"name":"ryan","photo":"google.com","scores":["1","1","1","1","1","1","1","1","1","1"]}': '' }

    for(let prop in newUser){ // Extract the object data from the Property Name
      newUser = JSON.parse(prop); // Convert the data back into an Object
    }

    // Get Total Score of New User
    let newUserScore = newUser.scores.reduce((previousValue, currentValue) => { return parseInt(previousValue) + parseInt(currentValue); }, 0);
    console.log(newUserScore);

    // Declare an Array to Store the Scores of each User which will be used to track User Index for Matching Friends
    let friendScores = friendsArray.map((friend) => { //Map Returns an Array
      return friend.scores.reduce((previousValue, currentValue) => { return previousValue + currentValue; }, 0); // Reduce() loops through each number of the User's Score Array, adds each Number to a running total. When done, the Final Total is Returned into an Array
    }); /*?*/

    console.log(friendScores);

    // Find Closest Matching User's Score
    let matchedUserScore = friendScores.reduce((previousValue, currentValue) => {
      return (Math.abs(currentValue - newUserScore) < Math.abs(previousValue - newUserScore) ? currentValue : previousValue);
    })


    // Find the Index of the Matched User
    let matchedUserIndex = friendScores.indexOf(matchedUserScore);

    // Send the Matched User Object Back to the grid_Vertical_Horizontal_Center
    res.json(friendsArray[matchedUserIndex]);

  });

}; // End of apiRoutes


/////////////////////////////////////////////// /* Exports */ //////////////////////////////////////////////////////////
module.exports = apiRoutes;
