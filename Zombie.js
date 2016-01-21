var Q = [
  "You are made of stardust, your greatest contribution is to shine",
  "Create, create, create, when you are done, create some more",
  "Anger is most toxic to the beholder. Replace the story of why you are so angry, with a new story of why you should let go of your anger for a more resiliant you.",
  "Living life with fluidity and movement alows for easier transitions. Today choose the path with the greatest ease.",
  "Today, be the observer.",
  "Practice active listening.",
  "You are The Vehicle of Change. Naviage with care and self preservation to the destinations you desire.",
  "If you love and respect yourself first, you can easily love and respect others. Treat yourself to an awesome gift today! Go for a walk, eat chocolate or meditate. These are all great gifts.",
  "Engage in uplifting activities today. Think about what will lift your spirits even higher today and do that. Set a goal that attainable.",
  "Checkin with your body today. Dive in deeper to listening to what it desires. Do you require more rest? Do you crave ice cream, but what you really need is calcium? Find the root of your body's needs and fill it.",
  "Take 10! Take 10 minutes to close your eyes, focus on your breath and with each breath try to breath deeper. You can do this anywhere, so get it done, my friend!",
  "Activate Super Powers in the form of__________! What super hero(ine) would you today? Make one gesture that reflects your powers.",

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

// var skullGif = getItem.setInterval(setSkullGif, 7);

var body = document.querySelector(".wrapper");

var images = [
    "zombieimages/image_1.jpg",
    "zombieimages/image_2.jpg",
    "zombieimages/image_3.jpg",
    "zombieimages/image_4.jpg",
    "zombieimages/image_5.jpg",
    "zombieimages/image_6.jpg",
    "zombieimages/image_7.jpg",
    "zombieimages/image_8.jpg",
    "zombieimages/image_9.jpg",
    "zombieimages/image_10.jpg",
    "zombieimages/image_11.jpg",
    "zombieimages/image_12.jpg",
    "zombieimages/image_13.jpg",
    "zombieimages/image_14.jpg",
    "zombieimages/image_15.jpg",
    "zombieimages/image_16.jpg",
    "zombieimages/image_17.jpg",
    "zombieimages/image_18.jpg",
    "zombieimages/image_19.jpg",
    "zombieimages/image_20.jpg",
    "zombieimages/image_21.jpg",
    "zombieimages/image_22.jpg",
    "zombieimages/image_23.jpg",
    "zombieimages/image_24.jpg",
    "zombieimages/image_25.jpg",
    "zombieimages/image_26.jpg",
    "zombieimages/image_27.jpg",
    "zombieimages/image_28.jpg",
    "zombieimages/image_29.jpg",
    "zombieimages/image_30.jpg",
    "zombieimages/image_31.jpg",
    "zombieimages/image_32.jpg",
    "zombieimages/image_33.jpg",
    "zombieimages/image_34.jpg",
    "zombieimages/image_35.jpg",
    "zombieimages/image_36.jpg",
    "zombieimages/image_37.jpg",
    "zombieimages/image_38.jpg",
    "zombieimages/image_39.jpg",
    "zombieimages/image_40.jpg",
    "zombieimages/image_41.jpg",
    "zombieimages/image_42.jpg",
    "zombieimages/image_43.jpg",
    "zombieimages/image_44.jpg",
    "zombieimages/image_45.jpg",
    "zombieimages/image_46.jpg",
    "zombieimages/image_47.jpg",
    "zombieimages/image_48.jpg",
    "zombieimages/image_49.jpg",
    "zombieimages/image_50.jpg",
    "zombieimages/image_51.jpg",
    "zombieimages/image_52.jpg",
    "zombieimages/image_53.jpg",
    "zombieimages/image_54.jpg",
    "zombieimages/image_55.jpg",
    "zombieimages/image_56.jpg",
    "zombieimages/image_57.jpg",
    "zombieimages/image_58.jpg",
    "zombieimages/image_59.jpg",
    "zombieimages/image_60.jpg"
]

// var container = document.createElement("section");
// container.setAttribute("class", "container");
// body.appendChild(container);

var button = document.querySelector("button");
button.addEventListener("click", function () {
  p.classList.add('hidden');
  button.classList.add('hidden');
  document.querySelector('header').classList.add('hidden');
  backgroundCounter = 0;
  interval = setInterval(setBackgroundImage, 300);
});
body.appendChild(button);

var p = document.createElement("p");
body.appendChild(p);

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

//
// var unseenQuotes = document.createElement("p").setAttribute("class", "unSeenQuotes");
//
// localStorage.setItem("unseenQuotes");
// localStorageQuote = localStorage.getItem("unseenQuotes", "p");
// // attaching quote to container
// var p = document.createElement("p");
// p.textContent = unSeenQuotes;
// container.appendChild(p);
//

var backgroundCounter = 0;
var backgroundMax = 13;
var interval;
function setBackgroundImage () {
  if (backgroundCounter >= backgroundMax) {
    clearInterval(interval);
    randomQuote();
    p.classList.remove('hidden');
    button.classList.remove('hidden');
    // showQuote();
    return;
  }

  var randomNumber = Math.floor(Math.random() * (images.length-1));
  document.body.style.backgroundImage = "url('" + images[randomNumber] + "')";
  // images.splice(randomNumber, 1);
  // console.log(splice);
  // for (var i = 0; i < randomImage.length; i++) {
  //   randomImage[i]
  // }

  backgroundCounter++;

}
//var interval = setInterval(setBackgroundImage, 300);
setTimeout(function () {
  document.querySelector('#skullGif').classList.toggle('hidden');
  body.classList.toggle('hidden');
}, 3000)

// if (background-Image.length === 0){
//   background-Image = randomImage
//
//   var
//   // reset backround-Image
// }
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
