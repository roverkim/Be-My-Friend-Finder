$(document).ready(function() {

  // Retrive Matched User Result From sessionStorage
  let results = JSON.parse(sessionStorage.getItem("matchedFriend")); //Convert result from string to JSON. sessionStorage only Stores "Key:Value Pairs" as Strings.

  /////////////////jquery//////////////////////////
  $(".imgHolder").attr("src", results.photo);   // Display Matched User image by Setting the Source of .imgHolder to results.photo

  // Display Results Feed
  let newsFeed = `Congratulations! You Have Been Matched With ${results.name}`;
  $("#feed").html(newsFeed);

  // Display Name of Matched User
  $(".homeFooter").text(`Matched With ${results.name}!`);

}); // End of Document.Ready()
