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
    let newUser = req.body; //Store User Data Received From Fetch Post

    // Using $.post()
    //Added JSON.stringify() to $.post data to bypass a weird occurance. However, this causes the enitre posted object to be set as a prop name within another object.
    // For Some Weird Reason, when an Array gets Posted from $.post, a [] symbol is added to the scores prop name 'scores[]'.
    //{ '{"name":"ryan","photo":"google.com","scores":["1","1","1","1","1","1","1","1","1","1"]}': '' }
    // for(let prop in newUser){ // Extract the object data from the Property Name
    //   newUser = JSON.parse(prop); // Convert the data back into an Object
    // }
    //

    // By Passed the Above Mentioned Problem Using fetch api

    // Get Total Score of New User by Reducing the Values Stored in Scores Array to a Singale Value
    let newUserScore = newUser.scores.reduce((previousValue, currentValue) => {
      return parseInt(previousValue) + parseInt(currentValue); }, 0);

    console.log("User Score is ", newUserScore);

    // Declare an Array to Store the Scores of each User which will be used to track User Index for Matching Friends
    let friendScores = friendsArray.map((friend) => { //Map Returns a New Array that has been Manipulated by reduce()
      return friend.scores.reduce((previousValue, currentValue) => {
        return previousValue + currentValue; }, 0); // Reduce() loops through each number of the User's Score Array, adds each Number to a running total. When done, the Final Total is Returned into an Array
    }); /*?*/

    console.log("Each User Score is" + friendScores);

    // Find Closest Matching User's Score
    let matchedUserScore = friendScores.reduce((previousValue, currentValue) => {
      return (Math.abs(currentValue - newUserScore) < Math.abs(previousValue - newUserScore) ? currentValue : previousValue);
    })

    // Find the Index of the Matched User by using the indexOf Method to locate the Matched Score from the friendScores Array
    let matchedUserIndex = friendScores.indexOf(matchedUserScore);
    console.log("Your Matched User has an Index of ", matchedUserIndex);

    console.log(friendsArray[matchedUserIndex]);

    // Send the Matched User Object Back to the Client
    res.json(friendsArray[matchedUserIndex]);

  });

}; // End of apiRoutes


/////////////////////////////////////////////// /* Exports */ //////////////////////////////////////////////////////////
module.exports = apiRoutes;
