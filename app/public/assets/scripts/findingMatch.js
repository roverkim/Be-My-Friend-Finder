$(document).ready(function() {
  var heart = function() {
    $("#heartShape").animate({
      opacity: 0.60,
      height: "100%",
      width: "100%"
    }, 800, function() {
      $("#heartShape").animate({
        opacity: 1.0,
        height: "220%",
        width: "100%"
      }, 900, function() {
        heart();
      });
    });
  }
  heart();
  var counter = 1;
  var interval = setInterval(function() {
    counter--;
    if (counter == 0) {
      clearInterval(interval);
      // var restaurantURL = getAFMRedirectUrl('kawamilwaukee');
      // window.location.replace(restaurantURL);
    }
  }, 1000);
  interval();
});
