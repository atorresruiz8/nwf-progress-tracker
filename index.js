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

const setupButtons = () => {
  // Add an event listener to each button to know which has
  // been clicked recently
  arcarum.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}

const setupTable = (table) => {
  // This table will have 3 columns and 8 rows
  // Loop through each row
  for (let i = 0; i < 8; i++) {
    // Insert a new row into the table
    let row = table.insertRow(i);

    // Loop through each column for the current row
    for (let j = 0; j < 3; j++) {
      // Insert a new cell into the current row
      let cell = row.insertCell(j);

      // Add some text to the cell
      cell.innerText = `Row ${i+1}, Column ${j+1}`;
    }
  }

  return table;
}

// Controller
const handleClick = (event) => {
  const buttonText = event.target.textContent;
  // debating if I need these checks
  // if (buttonText === "Rise of Justice") {
  //   console.log("justice button was pressed");
  // } else if (buttonText === "Binds of the Hanged Man") {
  //   console.log("hanged man button was pressed");
  // } else if (buttonText === "Pain of Death") {
  //   console.log("death button was pressed");
  // } else if (buttonText === "Theater of Temperance") {
  //   console.log("temperance button was pressed");
  // } else if (buttonText === "Kiss of the Devil") {
  //   console.log("devil button was pressed");
  // } else if (buttonText === "Collapse of the Tower") {
  //   console.log("tower button was pressed");
  // } else if (buttonText === "Shooting of the Star") {
  //   console.log("star button was pressed");
  // } else if (buttonText === "Reflection of the Moon") {
  //   console.log("moon button was pressed");
  // } else if (buttonText === "Heat of the Sun") {
  //   console.log("sun button was pressed");
  // } else if (buttonText === "Melody of Judgement") {
  //   console.log("judgement button was pressed");
  // }

  // Send the buttonText to the render function so we know which material spread to load
  render(buttonText);
}

// This function will check which button it received and display the appropriate HTML
const render = (buttonText) => {
  // Reset the page
  document.getElementById("container").innerHTML = "";

  // This is the container we will be adding HTML to
  let element = document.createElement("div");

  // Create a table that will display the materials for each step of the uncap process
  // This table will be updated to match the corresponding button pressed
  let table = document.createElement("table");
  
  // Check which button has been pressed so we know what elements to load into the table
  if (buttonText === "Rise of Justice") {
      // create elements displaying progress for Rise of Justice uncap
      let newTable = setupTable(table);
      element.appendChild(newTable);
  } else { // create elements for displaying progress on the rest
    console.log("f");
  }

  // add the element to the container
  const arcarumList = document.getElementById("container");
  arcarumList.appendChild(element);
}

setupButtons();