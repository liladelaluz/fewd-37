
var stopButton = document.querySelector(".stopButton");
var slowButton = document.querySelector(".slowButton");
var goButton = document.querySelector(".goButton");



stopButton.addEventListener("click", stopButton);
slowButton.addEventListener("click", slowButton);
goButton.addEventListener("click", goButton);


var stopLight = document.querySelector("#stopLight");
var yieldLight = document.querySelector("#yieldLight");
var goLight = document.querySelector("#goLight");



function stopButton(event) {
    alert("this is good");
}

function yieldLight(event) {
  console.log("This works.");
}
// var light = document.querySelector(.light);
// stopLight appendChild(light)


//
// fixture appendChild(#stopLight)
//
//
// fixture appendChild(.slowLight)
//
// fixture appendChild(.goLight);


/*
var aKey = document.querySelector("#A");
aKey.addEventListener("click", playA);
function playA(event) {
  howl.play("A")
}
*/
