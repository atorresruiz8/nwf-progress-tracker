// Model
// If localStorage has an arcarum array, then use it
// Otherwise, use default array
let uncapProgress;

// Retrieve localStorage
const savedProgress = JSON.parse(localStorage.getItem("uncapProgress"));

// Check if it's an array
if (Array.isArray(savedProgress)) {
  uncapProgress = savedProgress;
} else {
  uncapProgress = [];
  console.log(uncapProgress);
}


// View
// Get references to the buttons
const justiceButton = document.getElementById("justice-button");
const hangedManButton = document.getElementById("hanged-man-button");
const deathButton = document.getElementById("death-button");
const temperanceButton = document.getElementById("temperance-button");
const devilButton = document.getElementById("devil-button");
const towerButton = document.getElementById("tower-button");
const starButton = document.getElementById("star-button");
const moonButton = document.getElementById("moon-button");
const sunButton = document.getElementById("sun-button");
const judgementButton = document.getElementById("judgement-button");

const render = () => {
  
}

// Controller
const getButtonClicked = () => {

}