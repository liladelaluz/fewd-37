// This is what the data returning from IMDB will look like:
var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}
// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);
 // $("button").on("click", formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "https://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
}

function resultsReceived(results) {
  var movies = document.querySelector("#movies");
    console.log(results);
  // Try putting a debugger here and inspecting the results argument
    // debugger

  // The array of movies lives inside results["Search"]
  // See the sampleResult above for an example
  //For loop

  // var result = {
  // var testResult = results["Search"][0]["title"];
  // console.log(testResult);

// loop:
   for(var i = 0; i < results["Search"].length; i++){
     var div = document.createElement("div");

     var li = document.createElement("li");
     li.textContent = results.Search[i]["Title"];

     var image = document.createElement("img");

     var title = results["Search"][i]["Title"];

     var li2 = document.createElement("li2");
      li2.textContent = results.Search[i]["Year"];

     var Poster = results["Search"][i]["Poster"];
     image.setAttribute ("src", Poster);

    //  div.textContent = title



    movies.appendChild(div);
    div.appendChild(image);
    div.appendChild(li);
    div.appendChild(li2);

  }
}


//  results["Search"]

  // Access the first movie title

// }
