/////////////////////////////////////////////// /* Import Data */ //////////////////////////////////////////////////////////
const path = require("path"); // Used to handle Path Directories
const friendsArray = require("../data/friends.js"); // Require friends Array

/////////////////////////////////////////////// /* Get Routes */ //////////////////////////////////////////////////////////
let apiRoutes= (app) => {

  // Base API Path
  app.get("/api/:friends", (req, res) => {
    console.log("Get Friends Path Hit");
    let currentPath = req.params.friends; //Retrieve Parameters
    // Switch Statement to Handle API Requests
    switch(currentPath){
      case "friends":
        res.json(friendsArray)
        break;
      default:
         res.redirect("/"); // Redirect All Invalid URL to Root
        break;
    } // End Switch
  });

/////////////////////////////////////////////// /* Post Routes */ //////////////////////////////////////////////////////////
  app.post("/api/addUser", (req, res)=>{
    console.log("Post Friends Path Hit");
    let newUser = req.body; //Store User Data Received From Fetch Post

                                  // Using $.post() //
    //Added JSON.stringify() to $.post data to bypass a weird occurance. However, this causes the enitre posted object to be set as a prop name within another object.
    // For Some Weird Reason, when an Array gets Posted from $.post, a [] symbol is added to the scores prop name 'scores[]'.
    //{ '{"name":"ryan","photo":"google.com","scores":["1","1","1","1","1","1","1","1","1","1"]}': '' }
    // for(let prop in newUser){ // Extract the object data from the Property Name
    //   newUser = JSON.parse(prop); // Convert the data back into an Object
    // }
    //

    // Bypassed the Above Mentioned Problem Using fetch Method
    // Get Total Score of New User by Reducing the Values Stored in Scores Array to a Single Value
    let newUserScore = newUser.scores.reduce((previousValue, currentValue) => {
      return parseInt(previousValue) + parseInt(currentValue); }, 0);

    // Declare an Array to Store the Scores of each User, which will be used to track User Index for Matching Friends
    let friendScores = friendsArray.map((friend) => { //Map Returns a New Array that has been Manipulated by reduce()
      return friend.scores.reduce((previousValue, currentValue) => {
        return previousValue + currentValue; }, 0); // Reduce() loops through each number of the User's Score Array, adds each Number to a running total. When done, the Final Total is Returned into an Array
    });

    // Find Closest Matching User's Score
    let matchedUserScore = friendScores.reduce((previousValue, currentValue) => {
      return (Math.abs(currentValue - newUserScore) < Math.abs(previousValue - newUserScore) ? currentValue : previousValue);
    })

    // Find the Index of the Matched User by using the indexOf Method to locate the Matched Score from the friendScores Array
    let matchedUserIndex = friendScores.indexOf(matchedUserScore);

    //Post The User Data into Friends Array Object
    friendsArray.push(newUser);

    console.log(`User Score is ${newUserScore}`);
    console.log(`Each User Score is ${friendScores}`);
    console.log(`Your Matched User has an Index of ${matchedUserIndex}`);
    console.log(`Matched Friend Objecy is ${friendsArray[matchedUserIndex]}`);

    // Send the Matched User Object Back to the Client
    res.json(friendsArray[matchedUserIndex]);

  });
}; // End of apiRoutes


/////////////////////////////////////////////// /* Exports */ //////////////////////////////////////////////////////////
module.exports = apiRoutes;
