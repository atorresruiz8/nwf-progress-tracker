// Model
// If localStorage has an arcarum array, then use it
// Otherwise, use default array
let uncapProgress;

// An array to store the button objects
let arcarum = [];

// Retrieve localStorage
const savedProgress = JSON.parse(localStorage.getItem("uncapProgress"));

// Get the table that will display the materials for each step of the uncap process
// This table will be updated to match the corresponding button pressed  
let table = document.getElementById("progressTable");

// TODO: There should be a button for 1 Star, 2 Star, 3 Star, 4 Star, 5 Star and then all uncaps at once
// TODO: These buttons will display only the materials for the selected uncap level, or all of them if the last one is pressed

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

const setupButtons = () => {
  // Add an event listener to each button to know which has
  // been clicked recently
  arcarum.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}

// Controller
const handleClick = (event) => {
  const buttonText = event.target.textContent;
  // Check which button was pressed, then prepare to update the table as needed
  if (buttonText === "Rise of Justice") {
    table.style = "background-color: rgb(31, 81, 255)";
  } else if (buttonText === "Binds of the Hanged Man") {
    table.style = "background-color: rgb(205, 127, 50)";
  } else if (buttonText === "Pain of Death") {
    table.style = "background-color: rgb(54, 69, 79)";
  } else if (buttonText === "Theater of Temperance") {
    table.style = "background-color: rgb(0, 163, 108)";
  } else if (buttonText === "Kiss of the Devil") {
    table.style = "background-color: rgb(227, 66, 52)";
  } else if (buttonText === "Collapse of the Tower") {
    table.style = "background-color: rgb(205, 127, 50)";
  } else if (buttonText === "Shooting of the Star") {
    table.style = "background-color: rgb(255, 191, 0)";
  } else if (buttonText === "Reflection of the Moon") {
    table.style = "background-color: rgb(31, 81, 255)";
  } else if (buttonText === "Heat of the Sun") {
    table.style = "background-color: rgb(227, 66, 52)";
  } else if (buttonText === "Melody of Judgement") {
    table.style = "background-color: rgb(0, 163, 108)";
  }

  // Send the buttonText to the render function so we know which material spread to load
  render(buttonText);
}

// This function will check which button it received and display the appropriate HTML
const render = (buttonText) => {
  // Reset the page
  document.getElementById("container").innerHTML = "";

  // This is the container we will be adding HTML to
  let element = document.createElement("div");
  
  // Check which button has been pressed so we know what elements to load into the table
  if (buttonText === "Rise of Justice") {
      // update the table to display progress for Rise of Justice uncap
      
  } else { // create elements for displaying progress on the rest
    console.log("f");
  }

  // add the element to the container
  const arcarumList = document.getElementById("container");
  arcarumList.appendChild(element);
  
  // Add the table to the screen
  table.style = "opacity: 100%";
  element.appendChild(table);
}

setupButtons();