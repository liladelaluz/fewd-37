var Q = [
  "You are made of stardust, your greatest contribution is to shine",
  "Create, create, create, when you are done, create",
  "This is a placeholder",
  "Here is another one",
  "Crickets"
]

function generateQuote(event) {
  console.log("clicked!")

  var localStorageQuote = localStorage.getItem("unseenQuotes");
  //JSON.parse converts a string into an array
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

  localStorageQuote = localStorage.getItem("unseenQuotes");
  localStorageQuote = JSON.parse(localStorageQuote);
  console.log("**before randome num generation", localStorageQuote);

  var randomNum = getRandom(localStorageQuote);
  var quote = localStorageQuote[randomNum];
  // console.log(randomNum, quote);
  var p = document.createElement("p");
  p.textContent = quote;
  // this bucket called "randomQuote" will hold the result of the search from querySelector
  var quoteDiv = document.querySelector("#randomQuote")
  quoteDiv.appendChild(p)

  localStorageQuote.slice(randomNum, 1);
  localStorageQuote = JSON.stringify(localStorageQuote);
  console.log(localStorageQuote)
  localStorage.setItem("unseenQuotes", localStorageQuote);
}

var body = document.querySelector("body");

var container = document.createElement("section");
container.setAttribute("class", "container");
body.appendChild(container);

var button = document.querySelector("button");
button.addEventListener("click", generateQuote);
container.appendChild(button);
// container.appendChild(button);

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
