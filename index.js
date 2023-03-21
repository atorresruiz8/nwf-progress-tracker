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
  // Add an event listener to each button to know which has been clicked recently
  arcarum.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}

const setupTable = (arcarum) => {
  // TODO: add checks to see which uncap level we're displaying
  // TODO: make the "Have" column a textbox

  // Setup first row
  table.rows[0].cells[0].innerHTML = "1 Star Uncap";
  table.rows[0].cells[1].innerHTML = "Need";
  table.rows[0].cells[2].innerHTML = "Have";

  // Setup second row
  table.rows[1].cells[0].innerHTML = "New World Quartz";
  table.rows[1].cells[1].innerHTML = "5";
  table.rows[1].cells[2].innerHTML = "X";

  // Setup third row
  table.rows[2].cells[1].innerHTML = "70";
  table.rows[2].cells[2].innerHTML = "X";

  // Setup fourth row
  table.rows[3].cells[1].innerHTML = "100";
  table.rows[3].cells[2].innerHTML = "X";

  // Setup fifth row
  table.rows[4].cells[1].innerHTML = "15";
  table.rows[4].cells[2].innerHTML = "X";

  // Setup sixth row
  table.rows[5].cells[0].innerHTML = "Malice Fragment";
  table.rows[5].cells[1].innerHTML = "30";
  table.rows[5].cells[2].innerHTML = "X";

  // Setup seventh row
  table.rows[6].cells[1].innerHTML = "30";
  table.rows[6].cells[2].innerHTML = "X";

  // Setup eighth row
  table.rows[7].cells[1].innerHTML = "0";
  table.rows[7].cells[2].innerHTML = "0";

  // This switch statement checks which weapon we're looking at, so we can display appropriate material names
  switch (arcarum) {
    case "justice":
      table.rows[2].cells[0].innerHTML = "Justice Veritas";
      table.rows[3].cells[0].innerHTML = "Water Verum Proof";
      table.rows[4].cells[0].innerHTML = "Aqua Luster";
      table.rows[6].cells[0].innerHTML = "Aquaborne Astra";
      table.rows[7].cells[0].innerHTML = "Justice Idean";
      break;
    case "hanged-man":
      table.rows[2].cells[0].innerHTML = "Hanged Man Veritas";
      table.rows[3].cells[0].innerHTML = "Earth Verum Proof";
      table.rows[4].cells[0].innerHTML = "Terra Luster";
      table.rows[6].cells[0].innerHTML = "Earthborne Astra";
      table.rows[7].cells[0].innerHTML = "Hanged Man Idean";
      break;
    case "death": // TODO: update the table size for death and star
      table.rows[2].cells[0].innerHTML = "Death Veritas";
      table.rows[3].cells[0].innerHTML = "Earth Verum Proof";
      table.rows[4].cells[0].innerHTML = "Terra Luster";
      table.rows[6].cells[0].innerHTML = "Darkborne Astra";
      table.rows[7].cells[0].innerHTML = "Death Idean";
      break;
    case "temperance":
      table.rows[2].cells[0].innerHTML = "Temperance Veritas";
      table.rows[3].cells[0].innerHTML = "Wind Verum Proof";
      table.rows[4].cells[0].innerHTML = "Ventus Luster";
      table.rows[6].cells[0].innerHTML = "Windborne Astra";
      table.rows[7].cells[0].innerHTML = "Temperance Idean";
      break;
    case "devil":
      table.rows[2].cells[0].innerHTML = "Devil Veritas";
      table.rows[3].cells[0].innerHTML = "Fire Verum Proof";
      table.rows[4].cells[0].innerHTML = "Ignis Luster";
      table.rows[6].cells[0].innerHTML = "Flameborne Astra";
      table.rows[7].cells[0].innerHTML = "Devil Idean";
      break;
    case "tower":
      table.rows[2].cells[0].innerHTML = "Tower Veritas";
      table.rows[3].cells[0].innerHTML = "Earth Verum Proof";
      table.rows[4].cells[0].innerHTML = "Terra Luster";
      table.rows[6].cells[0].innerHTML = "Earthborne Astra";
      table.rows[7].cells[0].innerHTML = "Tower Idean";
      break;
    case "star": // TODO: update the table size for death and star
      table.rows[2].cells[0].innerHTML = "Star Veritas";
      table.rows[3].cells[0].innerHTML = "Wind Verum Proof";
      table.rows[4].cells[0].innerHTML = "Ventus Luster";
      table.rows[6].cells[0].innerHTML = "Lightborne Astra";
      table.rows[7].cells[0].innerHTML = "Star Idean";
      break;
    case "moon":
      table.rows[2].cells[0].innerHTML = "Moon Veritas";
      table.rows[3].cells[0].innerHTML = "Water Verum Proof";
      table.rows[4].cells[0].innerHTML = "Aqua Luster";
      table.rows[6].cells[0].innerHTML = "Aquaborne Astra";
      table.rows[7].cells[0].innerHTML = "Moon Idean";
      break;
    case "sun":
      table.rows[2].cells[0].innerHTML = "Sun Veritas";
      table.rows[3].cells[0].innerHTML = "Fire Verum Proof";
      table.rows[4].cells[0].innerHTML = "Ignis Luster";
      table.rows[6].cells[0].innerHTML = "Flameborne Astra";
      table.rows[7].cells[0].innerHTML = "Sun Idean";
      break;
    case "judgement":
      table.rows[2].cells[0].innerHTML = "Judgement Veritas";
      table.rows[3].cells[0].innerHTML = "Wind Verum Proof";
      table.rows[4].cells[0].innerHTML = "Ventus Luster";
      table.rows[6].cells[0].innerHTML = "Windborne Astra";
      table.rows[7].cells[0].innerHTML = "Judgement Idean";
      break;
    default:
      console.log("no arcarum was loaded");
  }
}

// Controller
const handleClick = (event) => {
  // This lets us know which button was just pressed based on the button's text
  const buttonText = event.target.textContent;

  // Send the buttonText to the render function so we know which material spread to load
  render(buttonText);
}

// When this button is clicked, we need to re-render all of the buttons and return to the previous layout
const handleBackButtonClick = (event) => {
  // // Get the container whose innerHTML was previously set to nothing when loading a table
  // const container = document.getElementById("container");

  // // Get the previously saved innerHTML and set it as the container's new innerHTML
  // container.innerHTML = localStorage.getItem("savedInnerHTML");
  
  // Refresh the page so the previous HTML displays instead of the table
  location.reload();
}

const saveInnerHTML = () => {
  // Get the container whose innerHTML we want saved for later use
  const container = document.getElementById("container");

  // Save the container's innerHTML to localStorage
  localStorage.setItem("savedInnerHTML", container.innerHTML);
}

// This function will check which button it received and display the appropriate HTML
const render = (buttonText) => {
  // Reset the page
  document.getElementById("container").innerHTML = "";

  // This is the container we will be adding HTML to
  let element = document.createElement("div");
  
  // Check which button has been pressed so we know what elements to load into the table
  if (buttonText === "Rise of Justice") {
      table.style = "background-color: rgb(31, 81, 255); opacity: 100%;";
      setupTable("justice");
  } else if (buttonText === "Binds of the Hanged Man") {
      table.style = "background-color: rgb(205, 127, 50); opacity: 100%;";
      setupTable("hanged-man");
  } else if (buttonText === "Pain of Death") {
      table.style = "background-color: rgb(54, 69, 79); opacity: 100%;";
      setupTable("death");
  } else if (buttonText === "Theater of Temperance") {
      table.style = "background-color: rgb(0, 163, 108); opacity: 100%;";
      setupTable("temperance");
  } else if (buttonText === "Kiss of the Devil") {
      table.style = "background-color: rgb(227, 66, 52); opacity: 100%;";
      setupTable("devil");
  } else if (buttonText === "Collapse of the Tower") {
      table.style = "background-color: rgb(205, 127, 50); opacity: 100%;";
      setupTable("tower");
  } else if (buttonText === "Shooting of the Star") {
      table.style = "background-color: rgb(255, 191, 0); opacity: 100%;";
      setupTable("star");
  } else if (buttonText === "Reflection of the Moon") {
      table.style = "background-color: rgb(31, 81, 255); opacity: 100%;";
      setupTable("moon");
  } else if (buttonText === "Heat of the Sun") {
      table.style = "background-color: rgb(227, 66, 52); opacity: 100%;";
      setupTable("sun");
  } else if (buttonText === "Melody of Judgement") {
      table.style = "background-color: rgb(0, 163, 108); opacity: 100%;";
      setupTable("judgement");
  }

  // add the element to the container
  const arcarumList = document.getElementById("container");
  arcarumList.appendChild(element);
  
  // Add the table to the screen
  element.appendChild(table);

  // TODO: add a 1*, 2*, 3*, 4*, 5* and "all uncaps" button here to display different tables

  // Add a button that takes you back to the previous screen
  const backButton = document.createElement("button");
  backButton.innerText = "Back";
  backButton.style = "margin-top: 30px; background-color: rgb(22, 27, 34); color: rgb(139, 148, 158); font-size: 20px;";
  backButton.onclick = handleBackButtonClick;
  element.appendChild(backButton);
}

saveInnerHTML();
setupButtons();