$(document).ready(function() {


                  // Using async await //
  // Display News Feed Function Seen on the Header of the Home Page
  async function getNews(){

    // Declare an Array to Store the Various News sources
    let newsSource = ["abc-news","cnn","google-news","the-telegraph","usa-today","cnbc","cbs-news","bbc-news","business-insider","financial-times"];

    // Create a URL that contains a random News Source
    let url = 'https://newsapi.org/v2/top-headlines?' + 'sources='+ newsSource[Math.floor(Math.random()*newsSource.length)] +'&' + 'apiKey=3ad333ed465e4e578b5933a28e024aa3';

    // Store the results of the API call in quotes
    let quotes = await $.ajax({url: url, type : "GET"}); // AJAX Call is made. Await pauses this particular function and continues when the promise has been resolved. Look up generators
    let newsFeed = ""; // Declare Empty String to Store News
    quotes.articles.forEach(story => newsFeed += story.title + "&nbsp &nbsp &nbsp"); //Populate newsFeed by looping through an Object Array Passed Back from News API
    newsFeed += newsFeed + " Provided By: <a href ='NewsAPI.org'> NewsAPI.org<a> "; // Add Attribution to NewsAPI as Required by Provider
    $("#feed").html(newsFeed);

    setInterval(getNews, 100000); //Refresh News Source Feed Every Minute
  }

  getNews(); // Execute getNews Function to Populate the Header of the Home Page

                // Regular AJAX Promise Call//
  // let getNews = () => {
  //   $.ajax({
  //       url: url,
  //       type : "GET"
  //     }).done((response) =>{
  //       let newsFeed = ""
  //       response.articles.forEach((story) => newsFeed += story.title + "&nbsp &nbsp &nbsp");
  //       $("#feed").html(newsFeed).css({"font-size":"1.5em","margin":"5px","color":"white"});
  //     });
  // };

}); // End of document.ready
