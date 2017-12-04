// jquery Function that Animates the Growing and Shrinkage of the Heart Logo Shown when findingMatch.html is Loaded
$(document).ready(function() {
    // Declare a heart Function that Grows and Shrinks #hearShape
    let heart = () => {
      $("#heartShape").animate({ // animate functions shrinks the Logo
        opacity: 0.60,
        height: "100%",
        width: "60%"
      }, 800, () => { // After 800 miliseconds, execute a callback that grows the Logo
        $("#heartShape").animate({
          opacity: 1.0,
          height: "150%",
          width: "100%"
        }, 900, heart()); // Use Recursion to Re-execute the Function
      });
    };

    let interval = () => {  // Function for handling Redirection after a Set Amount of Time
      counter--;
      if (counter == 0) {
        clearInterval(interval); // Stop Execution of the Function
        $.get("/results").done(newPath =>{ // Send a Request to the Server to get Results URL
            window.location.replace(newPath); // Load Results URL
         });
      }
    }

    let counter = 5; // Set the counter to 5. This is equvalent to 5 Seconds
    setInterval(interval, 1000);

    heart(); // Execute the Recursive Function
    interval(); // Execute Interval Function

});
