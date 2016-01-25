var Q = [
  "You are made of stardust, your greatest contribution to yourself and the world, is to shine!",
  "Create, create, create, when you are done, create some more...",
  "Anger is most toxic to the holder. Replace the story of why you are so angry, with a new story of why you should let go of your anger for a more resilient you. You owe it to yourself to be free of poisonous emotions!",
  "Live life with greater fluidity and more movement. This will allow for, easier transitions. Today choose the path with the greatest ease.",
  "Today, be the observer. Keep your eyes present to what is and how it operates in the space that surronds you.",
  "Practice active listening. Take in what is being said and let it marinate.",
  "You are The Vehicle of Change. Naviage with care and self preservation, to the destinations you desire.",
  "If you love and respect yourself first, you can easily love and respect others. Treat yourself to an awesome gift today, by doing something for you.",
  "Engage in uplifting activities today. Think about what will lift your spirits even higher today and do that. Set a goal that is attainable.",
  "Checkin with your body today. Dive in deeper to listening to what it desires. Do you require more rest? Do you crave ice cream, but what you really need is calcium? Find the root of your body's needs and fill them.",
  "Take 10! Take 10 minutes to close your eyes, focus on your breath and with each breath, try to breath deeper. You can do this anywhere, so get it done, my friend!",
  "Activate Super Powers in the form of__________! What super hero(ine) would you like to be today? Make one gesture that reflects your powers.",
  "Build the world you dream to live in! Complete one call to action. If you desire to build sustainable environments, make a point to buy local today. If you desire to save the condors, donate your time or money. You get the idea... take action.",
  "Something goes here!",
];


if (!localStorage.getItem('quotes')) {
  localStorage.setItem('quotes', JSON.stringify(Q));
}

var body = document.querySelector(".wrapper");

var images = [

       "newImages/image_1.jpg",
       "newImages/image_2.jpg",
       "newImages/image_3.jpg",
       "newImages/image_4.jpg",
       "newImages/image_5.jpg",
       "newImages/image_6.jpg",
       "newImages/image_7.jpg",
       "newImages/image_8.jpg",
       "newImages/image_9.jpg",
       "newImages/image_10.jpg",
       "newImages/image_11.jpg",
       "newImages/image_12.jpg",
       "newImages/image_13.jpg",
       "newImages/image_14.jpg",
       "newImages/image_15.jpg",
       "newImages/image_16.jpg",
       "newImages/image_17.jpg",
       "newImages/image_18.jpg",
       "newImages/image_19.jpg",
       "newImages/image_20.jpg",
       "newImages/image_21.jpg",
       "newImages/image_22.jpg",
       "newImages/image_23.jpg",
       "newImages/image_24.jpg",
       "newImages/image_25.jpg",
       "newImages/image_26.jpg",
       "newImages/image_27.jpg",
       "newImages/image_28.jpg",
       "newImages/image_29.jpg",
       "newImages/image_30.jpg",
]

// var container = document.createElement("section");
// container.setAttribute("class", "container");
// body.appendChild(container);

var button = document.querySelector("button");
button.addEventListener("click", function () {
  p.classList.add('hidden');
  button.classList.add('hidden');
  document.querySelector('header').classList.add('hidden');
  var footer = document.querySelector("footer");
  footer.classList.add('hidden');
  backgroundCounter = 0;
  interval = setInterval(setBackgroundImage, 100);
});
// body.appendChild(button);

var p = document.createElement("p");
p.setAttribute("class", "quote");
body.appendChild(p);

function randomQuote() {
  var quotes = JSON.parse(localStorage.getItem('quotes'));
  var randomNumber = Math.floor(Math.random() * (quotes.length-1));
  var quote = quotes[randomNumber];

  // take the random number and based on that index, assign it to a p tag and append p tag to the container
  quotes.splice(randomNumber, 1);
  p.textContent = quote;
  if (quotes.length === 0) {
    quotes = Q;
  }

  localStorage.setItem('quotes', JSON.stringify(quotes));
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
  backgroundCounter++;
}

setTimeout(function () {
  document.querySelector('.dancingMuerto').classList.toggle('hidden');
  body.classList.toggle('hidden');
}, 7000)
//var interval = setInterval(setBackgroundImage, 300);
// setTimeout(function () {
//   document.querySelector('#skullGif').classList.toggle('hidden');
//   body.classList.toggle('hidden');
// }, 700)



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
