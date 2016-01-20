var Q = [
  "You are made of stardust, your greatest contribution is to shine",
  "Create, create, create, when you are done, create",
  "This is a placeholder",
  "Here is another one",
  "Crickets"
];


if (!localStorage.getItem('quotes')) {
  localStorage.setItem('quotes', JSON.stringify(Q));
}


/*function generateQuote(event) {
  console.log("clicked!")


  //JSON.parse converts a string into an array
  console.log(typeof localStorageQuote);
  localStorageQuote = JSON.parse(localStorageQuote);

  // if local storage variable is null or equal to zero... JSON.parse converts a string into an array
  if (localStorageQuote == null || localStorageQuote.length == 0) {
    // if all quotes have been seen, reset local storage and give quotes again
    localStorage.clear();
    console.log("quotes Reset");
    // Write a conditional if/else to test if Q is a string
    // if it is a string, you need to put it as an object (use JSON parse)
    if (typeof Q === "string") {
      Q = JSON.parse(Q);
    } else {
      // something here
      // Q = JSON.stringify(Q);

    }
    console.log(typeof Q);
    // Stingify the array
    Q = JSON.stringify(Q);
    console.log(typeof Q);
    console.log("Q is:", Q);
    localStorage.setItem("unseenQuotes", Q);
  }

  localStorageQuote = JSON.parse(localStorageQuote);
  console.log("**before randome num generation", localStorageQuote);

  // console.log(randomNum, quote);

  // this bucket called "randomQuote" will hold the result of the search from querySelector
  var quoteDiv = document.querySelector("#randomQuote")
  quoteDiv.appendChild(p)

  localStorageQuote.slice(randomNum, 1);
  //localStorageQuote = JSON.stringify(localStorageQuote); //turns array into "["strings"\n,"so many strings"]"
  console.log(localStorageQuote)
  localStorage.setItem("unseenQuotes", localStorageQuote);
}





// generate a random number and pick that quote at that number in the array
// function promptPopOut() {
  // var popOut=document.querySelector(".popOut");
  // popOut.classList.add(".visable");


// set local storage Quote
// array of unseen quotes


  function getRandom(quotesArray) {
    var randomNumber = Math.random();
    var index = randomNumber * quotesArray.length;

    index = parseInt(index);
    return index;
  }
//
*/
var body = document.querySelector("body");
  body {
    background-Image: url(".zombie images.image_1.jpg");
    background-Image: url(".zombie images.image_2.jpg");
    background-Image: url(".zombie images.image_3.jpg");
    background-Image: url(".zombie images.image_4.jpg");
    background-Image: url(".zombie images.image_5.jpg");
    background-Image: url(".zombie images.image_6.jpg");
    background-Image: url(".zombie images.image_7.jpg");
    background-Image: url(".zombie images.image_8.jpg");
    background-Image: url(".zombie images.image_9.jpg");
    background-Image: url(".zombie images.image_10.jpg");
    background-Image: url(".zombie images.image_11.jpg");
    background-Image: url(".zombie images.image_12.jpg");
    background-Image: url(".zombie images.image_13.jpg");
    background-Image: url(".zombie images.image_14.jpg");
    background-Image: url(".zombie images.image_15.jpg");
    background-Image: url(".zombie images.image_16.jpg");
    background-Image: url(".zombie images.image_17.jpg");
    background-Image: url(".zombie images.image_18.jpg");
    background-Image: url(".zombie images.image_19.jpg");
    background-Image: url(".zombie images.image_20.jpg");
    background-Image: url(".zombie images.image_21.jpg");
    background-Image: url(".zombie images.image_22.jpg");
    background-Image: url(".zombie images.image_23.jpg");
    background-Image: url(".zombie images.image_24.jpg");
    background-Image: url(".zombie images.image_25.jpg");
    background-Image: url(".zombie images.image_26.jpg");
    background-Image: url(".zombie images.image_27.jpg");
    background-Image: url(".zombie images.image_28.jpg");
    background-Image: url(".zombie images.image_29.jpg");
    background-Image: url(".zombie images.image_30.jpg");
    background-Image: url(".zombie images.image_31.jpg");
    background-Image: url(".zombie images.image_32.jpg");
    background-Image: url(".zombie images.image_33.jpg");
    background-Image: url(".zombie images.image_34.jpg");
    background-Image: url(".zombie images.image_35.jpg");
    background-Image: url(".zombie images.image_36.jpg");
    background-Image: url(".zombie images.image_37.jpg");
    background-Image: url(".zombie images.image_38.jpg");
    background-Image: url(".zombie images.image_39.jpg");
    background-Image: url(".zombie images.image_40.jpg");
    background-Image: url(".zombie images.image_41.jpg");
    background-Image: url(".zombie images.image_42.jpg");
    background-Image: url(".zombie images.image_43.jpg");
    background-Image: url(".zombie images.image_44.jpg");
    background-Image: url(".zombie images.image_45.jpg");
    background-Image: url(".zombie images.image_46.jpg");
    background-Image: url(".zombie images.image_47.jpg");
    background-Image: url(".zombie images.image_48.jpg");
    background-Image: url(".zombie images.image_49.jpg");
    background-Image: url(".zombie images.image_50.jpg");
    background-Image: url(".zombie images.image_51.jpg");
    background-Image: url(".zombie images.image_52.jpg");
    background-Image: url(".zombie images.image_53.jpg");
    background-Image: url(".zombie images.image_54.jpg");
    background-Image: url(".zombie images.image_55.jpg");
    background-Image: url(".zombie images.image_56.jpg");
    background-Image: url(".zombie images.image_57.jpg");
    background-Image: url(".zombie images.image_58.jpg");
    background-Image: url(".zombie images.image_59.jpg");
    background-Image: url(".zombie images.image_60.jpg");
  }

var container = document.createElement("section");
container.setAttribute("class", "container");
body.appendChild(container);

var button = document.querySelector("button");
button.addEventListener("click", randomQuote);
container.appendChild(button);

var p = document.createElement("p");
container.appendChild(p);

function randomQuote() {
  var quotes = JSON.parse(localStorage.getItem('quotes'));
  var randomNumber = Math.floor(Math.random() * (quotes.length-1));
  var quote = quotes[randomNumber];

  quotes.splice(randomNumber, 1);
  p.textContent = quote;
  if (quotes.length === 0) {
    quotes = Q;
  }
  localStorage.setItem('quotes', JSON.stringify(quotes));

  // take the random number and based on that index, assign it to a p tag and append p tag to the container
}


var unseenQuotes = document.createElement("p").setAttribute("class", "unSeenQuotes");

localStorage.setItem("unseenQuotes");
localStorageQuote = localStorage.getItem("unseenQuotes", "p");
// attaching quote to container
var p = document.createElement("p");
p.textContent = unSeenQuotes;
container.appendChild(p);


var randomImage = Math.floor(Math.random() * (randomImage.length-1));

for (var i = 0; i < randomImage.length; i++) {
  randomImage[i]

}
if (background-Image.length === 0){
  background-Image = I
  // reset backround-Image
}
// get a random quote
  // var i = 0
  // Q[i]i++ Math.random() Q.length
//   for (var i = 0; i < Math.random()Q.length; i++) {
//     Math.random()Q[i]
//   }
//   // localStorage.setItem("quotes", v)
//   jason.stringify(Q)"..."
//
//   // localStorageGetItem("quotes")
//   jason.parse(s)
// // delete what has already been seen in local storage
//   q.splice(i,j)delete
// // change body background color
// // change container background color
// // Create Div Element
  // Log In Name Label and log in name input from Facebook
  // Log in password label and log in password input from Facebook
  // (these buttons are to collect the history of the user and to always provide them with a new mantra, once they use all the mantras, the program will reset)
  // Submit button to pass in these buttons



// var prompt = document.createElement("popOut");
// popOut.setAttribute("id", "prompt");
// popOut.textContent = "Log In Name", "Log In Password");


// the loop will run through to the length of the quote by visiting each index of the array
// var randomNum = getRandom(localStorageQuote);
// var quote = localStorageQuote[randomNum];
