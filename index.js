// Model
// If localStorage has an arcarum array, then use it
// Otherwise, use default array
let uncapProgress;

// An array to store the button objects
let arcarum = [];

// Retrieve localStorage
const savedProgress = JSON.parse(localStorage.getItem("uncapProgress"));

// Check if it's an array
if (Array.isArray(savedProgress)) {
  uncapProgress = savedProgress;
} else {
  uncapProgress = [];
  //console.log(uncapProgress);
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

// Store all of the buttons in the array for easier access
arcarum.push(
  justiceButton, hangedManButton, deathButton,
  temperanceButton, devilButton, towerButton,
  starButton, moonButton, sunButton, judgementButton
  );

const render = () => {
  // Add an event listener to each button to know which has
  // been clicked recently
  arcarum.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}

// Controller
const handleClick = (event) => {
  const buttonText = event.target.textContent;
  if (buttonText === "Rise of Justice") {
    console.log("justice button was pressed"); 
  } else if (buttonText === "Binds of the Hanged Man") {
    console.log("hanged man button was pressed");
  } else if (buttonText === "Pain of Death") {
    console.log("death button was pressed");
  } else if (buttonText === "Theater of Temperance") {
    console.log("temperance button was pressed");
  } else if (buttonText === "Kiss of the Devil") {
    console.log("devil button was pressed");
  } else if (buttonText === "Collapse of the Tower") {
    console.log("tower button was pressed");
  } else if (buttonText === "Shooting of the Star") {
    console.log("star button was pressed");
  } else if (buttonText === "Reflection of the Moon") {
    console.log("moon button was pressed");
  } else if (buttonText === "Heat of the Sun") {
    console.log("sun button was pressed");
  } else if (buttonText === "Melody of Judgement") {
    console.log("judgement button was pressed");
  }
  
}

render();