$(document).ready(function() {

  // $('#submitSurvey').on("click", (event)=>{
  //     event.preventDefault();
  //
  //     let selections = []; // Declare an Array to store the Various Selection Values
  //
  //     for(let i = 1; i <= 10; i++ ){ // Push the Selection Values into The Array,
  //       selections.push($("#q"+i).val());
  //     }
  //
  //     let userData = { // Create an Object to Store all User Data
  //       name : $("#nameInput").val(), // Get User's Name
  //       photoURL : $("#photoURL").val(), // Get User's Photo
  //       selections : selections
  //     }
  //
  //
  //     // AJAX Call To The Server
  //     // $.post("./api")
  //
  //
  // }) // End of Submit Button Click

  $('#submitSurvey').on("click", (event)=>{
      event.preventDefault();

      let selections = []; // Declare an Array to store the Various Selection Values

      for(let i = 1; i <= 10; i++ ){ // Push the Selection Values into The Array,
        selections.push($("#q"+i).val());
      }

      let userData = { // Create an Object to Store all User Data
        "name" : $("#nameInput").val(), // Get User's Name
        "photo" : $("#photoURL").val(), // Get User's Photo
        "scores" : selections
      };


      // AJAX Post Call To The Server
      $.post("/api/addUser", JSON.stringify(userData), "json").done((response)=>{
        // alert(JSON.stringify(response));
        $.get("/findingMatch").done((response)=>{
          window.location.replace(response);
          console.log("response is " + response);
        });

      });

  }); // End of Submit Button Click



}); // End of document.ready
