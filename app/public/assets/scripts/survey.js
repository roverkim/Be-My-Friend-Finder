$(document).ready(function() {

  // Display Results Feed with Custom Message
  let newsFeed = "Click the Left or Right Arrows to Move Between Questions. Hit the Submit Button to Find Your Match. Please Enter your Name and Attach a Photo URL of yourself in the Input Boxes";
  $("#feed").html(newsFeed);

  // Event Listner for the Submit Btn Click
  $('#submitSurvey').on("click", (event)=>{
      event.preventDefault();

      let userName = $("#nameInput").val(); //Retrieve the User's Name
      let photoURL = $("#photoURL").val(); //Retrieve the User's Photo URL

      // Error Handling to Prevent Name and Photo URL from being Empty
      if(userName == ''){
        alert("Name Input Cannot be Empty!")
      } else if (photoURL == ''){
        alert("Photo URL Input Cannot be Empty!")
      } else {
         // If Name and Photo Input Fields are not Empty
        console.log("Input Sucess");

        let selections = []; // Declare an Array to store the Various Selected Values
        for(let i = 1; i <= 10; i++ ){ // Push the Selected Values into The Array Selections
          selections.push($("#q"+i).val());
        }

        let userData = { // Create an Object to Store all the User Data
          "name" : userName, // User's Name
          "photo" : photoURL, // User's Photo
          "scores" : selections // User's Selection Array
        };

        // Using fetch Post Call to the Server. Using regular $.Post AJAX adds a "[]" symbol to "scores", "socred[]", when retrieved from the Backend
        fetch("/api/addUser", {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        }).then(response => response.json()).then((data) =>{
            // Server Returns the Results of the Matched Friend
            sessionStorage.setItem("matchedFriend", JSON.stringify(data)); // Store the Results of the Matched Friend in Session Storage. Session Storage only accepts "Key:Value" Pairs. "matchedFriend" is the Key. "data" is the value that has to be converted into a string for Session Storage to Work
            $.get("/findingMatch").done((newPath)=>{ //Request for findingMatch URL. newPath = "findingMatch.html"
              window.location.replace(newPath); // Redirect the Client's Browser to /findingMatch.html. This Function Makes Another get call to the Server for "findingMatch.html"
             });
        });
      }
  }); // End of Submit Button Click

}); // End of document.ready
