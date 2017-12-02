$(document).ready(function() {

  // Display Results Feed
  let newsFeed = "Click the Left or Right Arrows to Move Between Questions. Hit the Submit Button to Find Your Match. Please Enter your Name and Attach a Photo URL of yourself in the Input Boxes";
  $("#feed").html(newsFeed).css({"font-size":"1.5em","vertical-align":"center","margin":"5px","color":"white"}); // Set CSS Styles


  $('#submitSurvey').on("click", (event)=>{

      event.preventDefault();
      let userName = $("#nameInput").val();
      let photoURL = $("#photoURL").val();

      if(userName == ''){
        alert("Name Input Cannot be Empty!")
      } else if (photoURL == ''){
        alert("Photo URL Input Cannot be Empty!")
      } else {
        console.log("yes");
        let selections = []; // Declare an Array to store the Various Selection Values

        for(let i = 1; i <= 10; i++ ){ // Push the Selected Values into The Array Selections
          selections.push($("#q"+i).val());
        }

        let userData = { // Create an Object to Store all User Data
          "name" : userName, // Get User's Name
          "photo" : photoURL, // Get User's Photo
          "scores" : selections
        };

        // Using fetch Post Call to the Server
        fetch("/api/addUser", {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        }).then(response => response.json()).then((data) =>{
            sessionStorage.setItem("matchedFriend", JSON.stringify(data));
            $.get("/findingMatch").done((newPath)=>{
              window.location.replace(newPath);
             });
        });
      }
  }); // End of Submit Button Click

}); // End of document.ready
