$(document).ready(function() {

  // function hearBeat(){
    let heart = () => {
      $("#heartShape").animate({
        opacity: 0.60,
        height: "100%",
        width: "60%"
      }, 800, () => {
        $("#heartShape").animate({
          opacity: 1.0,
          height: "150%",
          width: "100%"
        }, 900, heart());
      });
    };

    let counter = 5; //Seconds
    let interval = setInterval(() => {
      counter--;
      if (counter == 0) {
        clearInterval(interval);
        $.get("/results").done(newPath =>{
            window.location.replace(newPath);
         });
      }
    }, 1000);

    heart();
    interval();

});
