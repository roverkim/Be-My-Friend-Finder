$(document).ready(function() {

  // Retrive Matched User Result From sessionStorage
  let results = JSON.parse(sessionStorage.getItem("matchedFriend")); //Convert result from string to JSON

  /////////////////jquery//////////////////////////
  // Show Matched User image
  $(".imgHolder").attr("src", results.photo);

  // Display Results Feed
  let newsFeed = `Congratulations! You Have Been Matched With ${results.name}`;
  $("#feed").html(newsFeed).css({"font-size":"1.5em","margin":"5px","color":"white"}); // Set CSS Styles

  // Display Name of Matched User
  $(".homeFooter").text(`Matched With ${results.name}!`);

}); // End of Document.Ready()
