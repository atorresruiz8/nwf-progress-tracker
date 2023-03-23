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

const setupStarAndDeathTables = (arcarum, uncapLevel) => {
    // Insert two more rows as Death uses more materials
    let verumRow = table.insertRow(-1);
    let verumTitleCell = verumRow.insertCell(0);
    let verumNeedCell = verumRow.insertCell(1);
    let verumHaveCell = verumRow.insertCell(2);

    let lusterRow = table.insertRow(-1);
    let lusterTitleCell = lusterRow.insertCell(0);
    let lusterNeedCell = lusterRow.insertCell(1);
    let lusterHaveCell = lusterRow.insertCell(2);

  switch (arcarum) {
    case "death":
      table.rows[8].cells[0].innerHTML = "Water Verum Proof";
      table.rows[9].cells[0].innerHTML = "Aqua Luster";
      if (uncapLevel === "one") {
        table.rows[8].cells[1].innerHTML = "50";
        table.rows[8].cells[2].innerHTML = "X";
        table.rows[9].cells[1].innerHTML = "7";
        table.rows[9].cells[2].innerHTML = "X";
      } else if (uncapLevel === "two") {
        table.rows[8].cells[1].innerHTML = "75";
        table.rows[8].cells[2].innerHTML = "X";
        table.rows[9].cells[1].innerHTML = "15";
        table.rows[9].cells[2].innerHTML = "X";
      } else if (uncapLevel === "three") {
        table.rows[8].cells[1].innerHTML = "100";
        table.rows[8].cells[2].innerHTML = "X";
        table.rows[9].cells[1].innerHTML = "25";
        table.rows[9].cells[2].innerHTML = "X";
      } else if (uncapLevel === "four") {
        table.rows[8].cells[1].innerHTML = "125";
        table.rows[8].cells[2].innerHTML = "X";
        table.rows[9].cells[1].innerHTML = "30";
        table.rows[9].cells[2].innerHTML = "X";
      } else if (uncapLevel === "five") {
        table.rows[8].cells[0].innerHTML = "Aqua Luster";
        table.rows[8].cells[1].innerHTML = "35";
        table.rows[8].cells[2].innerHTML = "X";
        table.deleteRow(9);
      }
      break;
    case "star":
      table.rows[8].cells[0].innerHTML = "Fire Verum Proof";
      table.rows[9].cells[0].innerHTML = "Ignis Luster";
      if (uncapLevel === "one") {
        table.rows[8].cells[1].innerHTML = "50";
        table.rows[8].cells[2].innerHTML = "X";
        table.rows[9].cells[1].innerHTML = "7";
        table.rows[9].cells[2].innerHTML = "X";
      } else if (uncapLevel === "two") {
        table.rows[8].cells[1].innerHTML = "75";
        table.rows[8].cells[2].innerHTML = "X";
        table.rows[9].cells[1].innerHTML = "15";
        table.rows[9].cells[2].innerHTML = "X";
      } else if (uncapLevel === "three") {
        table.rows[8].cells[1].innerHTML = "100";
        table.rows[8].cells[2].innerHTML = "X";
        table.rows[9].cells[1].innerHTML = "25";
        table.rows[9].cells[2].innerHTML = "X";
      } else if (uncapLevel === "four") {
        table.rows[8].cells[1].innerHTML = "125";
        table.rows[8].cells[2].innerHTML = "X";
        table.rows[9].cells[1].innerHTML = "30";
        table.rows[9].cells[2].innerHTML = "X";
      } else if (uncapLevel === "five") {
        table.rows[8].cells[0].innerHTML = "Ignis Luster";
        table.rows[8].cells[1].innerHTML = "35";
        table.rows[8].cells[2].innerHTML = "X";
        table.deleteRow(9);
      }
      break;
    default:
      console.log("The table is setup.");
  }
}

const setupTable = (arcarum, uncapLevel) => {
  // TODO: make the "Have" column a textbox
  // TODO: add images of each material
  // TODO: style the table to look prettier
  // TODO: Create and render all 5 tables for "Full Uncap" button
  switch (uncapLevel) {
    case "one":
      // Setup first row
      table.rows[0].cells[0].innerHTML = "1 &#9733; Uncap"; // &#9733; is HTML code for a solid star symbol
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
      break;
    case "two":
      // Setup first row
      table.rows[0].cells[0].innerHTML = "2 &#9733; Uncap"; // &#9733; is HTML code for a solid star symbol
      table.rows[0].cells[1].innerHTML = "Need";
      table.rows[0].cells[2].innerHTML = "Have";

      // Setup second row
      table.rows[1].cells[0].innerHTML = "New World Quartz";
      table.rows[1].cells[1].innerHTML = "10";
      table.rows[1].cells[2].innerHTML = "X";

      // Setup third row
      table.rows[2].cells[1].innerHTML = "100";
      table.rows[2].cells[2].innerHTML = "X";

      // Setup fourth row
      table.rows[3].cells[1].innerHTML = "150";
      table.rows[3].cells[2].innerHTML = "X";

      // Setup fifth row
      table.rows[4].cells[1].innerHTML = "30";
      table.rows[4].cells[2].innerHTML = "X";

      // Setup sixth row
      table.rows[5].cells[0].innerHTML = "Verdant Azurite";
      table.rows[5].cells[1].innerHTML = "20";
      table.rows[5].cells[2].innerHTML = "X";

      // Setup seventh row
      table.rows[6].cells[1].innerHTML = "50";
      table.rows[6].cells[2].innerHTML = "X";

      // Setup eighth row
      table.rows[7].cells[1].innerHTML = "30";
      table.rows[7].cells[2].innerHTML = "X";
      break;
    case "three":
      // Setup first row
      table.rows[0].cells[0].innerHTML = "3 &#9733; Uncap"; // &#9733; is HTML code for a solid star symbol
      table.rows[0].cells[1].innerHTML = "Need";
      table.rows[0].cells[2].innerHTML = "Have";

      // Setup second row
      table.rows[1].cells[0].innerHTML = "New World Quartz";
      table.rows[1].cells[1].innerHTML = "20";
      table.rows[1].cells[2].innerHTML = "X";

      // Setup third row
      table.rows[2].cells[1].innerHTML = "130";
      table.rows[2].cells[2].innerHTML = "X";

      // Setup fourth row
      table.rows[3].cells[1].innerHTML = "200";
      table.rows[3].cells[2].innerHTML = "X";

      // Setup fifth row
      table.rows[4].cells[1].innerHTML = "50";
      table.rows[4].cells[2].innerHTML = "X";

      // Setup sixth row
      table.rows[5].cells[1].innerHTML = "20";
      table.rows[5].cells[2].innerHTML = "X";

      // Setup seventh row
      table.rows[6].cells[1].innerHTML = "100";
      table.rows[6].cells[2].innerHTML = "X";

      // Setup eighth row
      table.rows[7].cells[1].innerHTML = "70";
      table.rows[7].cells[2].innerHTML = "X";
      break;
    case "four":
      // Setup first row
      table.rows[0].cells[0].innerHTML = "4 &#9733; Uncap"; // &#9733; is HTML code for a solid star symbol
      table.rows[0].cells[1].innerHTML = "Need";
      table.rows[0].cells[2].innerHTML = "Have";

      // Setup second row
      table.rows[1].cells[0].innerHTML = "New World Quartz";
      table.rows[1].cells[1].innerHTML = "20";
      table.rows[1].cells[2].innerHTML = "X";

      // Setup third row
      table.rows[2].cells[1].innerHTML = "150";
      table.rows[2].cells[2].innerHTML = "X";

      // Setup fourth row
      table.rows[3].cells[1].innerHTML = "250";
      table.rows[3].cells[2].innerHTML = "X";

      // Setup fifth row
      table.rows[4].cells[1].innerHTML = "60";
      table.rows[4].cells[2].innerHTML = "X";

      // Setup sixth row
      table.rows[5].cells[1].innerHTML = "30";
      table.rows[5].cells[2].innerHTML = "X";

      // Setup seventh row
      table.rows[6].cells[1].innerHTML = "120";
      table.rows[6].cells[2].innerHTML = "X";

      // Setup eighth row
      table.rows[7].cells[1].innerHTML = "100";
      table.rows[7].cells[2].innerHTML = "X";
      break;
    case "five":
      // Setup first row
      table.rows[0].cells[0].innerHTML = "5 &#9733; Uncap"; // &#9733; is HTML code for a solid star symbol
      table.rows[0].cells[1].innerHTML = "Need";
      table.rows[0].cells[2].innerHTML = "Have";

      // Setup second row
      table.rows[1].cells[0].innerHTML = "New World Quartz";
      table.rows[1].cells[1].innerHTML = "30";
      table.rows[1].cells[2].innerHTML = "X";

      // Setup third row
      table.rows[2].cells[1].innerHTML = "170";
      table.rows[2].cells[2].innerHTML = "X";

      // Setup fourth row
      table.rows[3].cells[1].innerHTML = "30";
      table.rows[3].cells[2].innerHTML = "X";

      // Setup fifth row
      table.rows[4].cells[1].innerHTML = "70";
      table.rows[4].cells[2].innerHTML = "X";

      // Setup sixth row
      table.rows[5].cells[1].innerHTML = "30";
      table.rows[5].cells[2].innerHTML = "X";

      // Setup seventh row
      table.rows[6].cells[1].innerHTML = "140";
      table.rows[6].cells[2].innerHTML = "X";

      // Setup eighth row
      table.rows[7].cells[1].innerHTML = "130";
      table.rows[7].cells[2].innerHTML = "X";

      // Setup ninth row
      let eternitySandRow = table.insertRow(-1);
      let eternitySandTitle = eternitySandRow.insertCell(0);
      let eternitySandNeed = eternitySandRow.insertCell(1);
      let eternitySandHave = eternitySandRow.insertCell(2);

      eternitySandTitle.innerHTML = "Eternity Sand";
      eternitySandNeed.innerHTML = "3";
      eternitySandHave.innerHTML = "X";
      break;
    case "full": // this case will create 5 tables showing each of the previous tables
      console.log("full uncap was pressed...");
      break;
    default:
      console.log("Previous uncap level displaying."); 
  }

  // This switch statement checks which weapon we're looking at, so we can display appropriate material names
  switch (arcarum) {
    case "justice":
      table.rows[2].cells[0].innerHTML = "Justice Veritas";
      table.rows[3].cells[0].innerHTML = "Water Verum Proof";
      table.rows[4].cells[0].innerHTML = "Aqua Luster";
      
      if (uncapLevel === "three" || uncapLevel === "four") {
        table.rows[5].cells[0].innerHTML = "Wamdus' Jewel";
      }

      if (uncapLevel === "five") {
        table.rows[3].cells[0].innerHTML = "Bellator Fragment";
        table.rows[5].cells[0].innerHTML = "Abyssal Tragedy";
      }

      table.rows[6].cells[0].innerHTML = "Aquaborne Astra";
      table.rows[7].cells[0].innerHTML = "Justice Idean";
      break;
    case "hanged-man":
      table.rows[2].cells[0].innerHTML = "Hanged Man Veritas";
      table.rows[3].cells[0].innerHTML = "Earth Verum Proof";
      table.rows[4].cells[0].innerHTML = "Terra Luster";

      if (uncapLevel === "three" || uncapLevel === "four") {
        table.rows[5].cells[0].innerHTML = "Galleon's Jewel";
      }

      if (uncapLevel === "five") {
        table.rows[3].cells[0].innerHTML = "Aquila Fragment";
        table.rows[5].cells[0].innerHTML = "Insular Core";
      }

      table.rows[6].cells[0].innerHTML = "Earthborne Astra";
      table.rows[7].cells[0].innerHTML = "Hanged Man Idean";
      break;
    case "death":
      table.rows[2].cells[0].innerHTML = "Death Veritas";
      table.rows[3].cells[0].innerHTML = "Earth Verum Proof";
      table.rows[4].cells[0].innerHTML = "Terra Luster";

      if (uncapLevel === "one") {
        setupStarAndDeathTables("death", "one");
      } else if (uncapLevel === "two") {
        setupStarAndDeathTables("death", "two");
      } else if (uncapLevel === "three") {
        setupStarAndDeathTables("death", "three");
      } else if (uncapLevel === "four") {
        setupStarAndDeathTables("death", "four");
      } else if (uncapLevel === "five") {
        setupStarAndDeathTables("death", "five");
      }

      if (uncapLevel === "three" || uncapLevel === "four") {
        table.rows[5].cells[0].innerHTML = "Fediel's Jewel";
      }

      if (uncapLevel === "five") {
        table.rows[3].cells[0].innerHTML = "Celsus Fragment";
        table.rows[5].cells[0].innerHTML = "Todestrieb";
      }

      table.rows[6].cells[0].innerHTML = "Darkborne Astra";
      table.rows[7].cells[0].innerHTML = "Death Idean";
      break;
    case "temperance":
      table.rows[2].cells[0].innerHTML = "Temperance Veritas";
      table.rows[3].cells[0].innerHTML = "Wind Verum Proof";
      table.rows[4].cells[0].innerHTML = "Ventus Luster";

      if (uncapLevel === "three" || uncapLevel === "four") {
        table.rows[5].cells[0].innerHTML = "Ewiyar's Jewel";
      }

      if (uncapLevel === "five") {
        table.rows[3].cells[0].innerHTML = "Celsus Fragment";
        table.rows[5].cells[0].innerHTML = "Gale Rock";
      }

      table.rows[6].cells[0].innerHTML = "Windborne Astra";
      table.rows[7].cells[0].innerHTML = "Temperance Idean";
      break;
    case "devil":
      table.rows[2].cells[0].innerHTML = "Devil Veritas";
      table.rows[3].cells[0].innerHTML = "Fire Verum Proof";
      table.rows[4].cells[0].innerHTML = "Ignis Luster";

      if (uncapLevel === "three" || uncapLevel === "four") {
        table.rows[5].cells[0].innerHTML = "Wilnas' Jewel";
      }

      if (uncapLevel === "five") {
        table.rows[3].cells[0].innerHTML = "Aquila Fragment";
        table.rows[5].cells[0].innerHTML = "Smoldering Rubble";
      }

      table.rows[6].cells[0].innerHTML = "Flameborne Astra";
      table.rows[7].cells[0].innerHTML = "Devil Idean";
      break;
    case "tower":
      table.rows[2].cells[0].innerHTML = "Tower Veritas";
      table.rows[3].cells[0].innerHTML = "Earth Verum Proof";
      table.rows[4].cells[0].innerHTML = "Terra Luster";

      if (uncapLevel === "three" || uncapLevel === "four") {
        table.rows[5].cells[0].innerHTML = "Galleon's Jewel";
      }

      if (uncapLevel === "five") {
        table.rows[3].cells[0].innerHTML = "Celsus Fragment";
        table.rows[5].cells[0].innerHTML = "Insular Core";
      }

      table.rows[6].cells[0].innerHTML = "Earthborne Astra";
      table.rows[7].cells[0].innerHTML = "Tower Idean";
      break;
    case "star":
      table.rows[2].cells[0].innerHTML = "Star Veritas";
      table.rows[3].cells[0].innerHTML = "Wind Verum Proof";
      table.rows[4].cells[0].innerHTML = "Ventus Luster";

      if (uncapLevel === "three" || uncapLevel === "four") {
        table.rows[5].cells[0].innerHTML = "Lu Woh's Jewel";
      }

      if (uncapLevel === "five") {
        table.rows[3].cells[0].innerHTML = "Celsus Fragment";
        table.rows[5].cells[0].innerHTML = "Thunderbolt Wheel";
      }

      if (uncapLevel === "one") {
        setupStarAndDeathTables("star", "one");
      } else if (uncapLevel === "two") {
        setupStarAndDeathTables("star", "two");
      } else if (uncapLevel === "three") {
        setupStarAndDeathTables("star", "three");
      } else if (uncapLevel === "four") {
        setupStarAndDeathTables("star", "four");
      } else if (uncapLevel === "five") {
        setupStarAndDeathTables("star", "five");
      }

      table.rows[6].cells[0].innerHTML = "Lightborne Astra";
      table.rows[7].cells[0].innerHTML = "Star Idean";
      break;
    case "moon":
      table.rows[2].cells[0].innerHTML = "Moon Veritas";
      table.rows[3].cells[0].innerHTML = "Water Verum Proof";
      table.rows[4].cells[0].innerHTML = "Aqua Luster";

      if (uncapLevel === "three" || uncapLevel === "four") {
        table.rows[5].cells[0].innerHTML = "Wamdus' Jewel";
      }

      if (uncapLevel === "five") {
        table.rows[3].cells[0].innerHTML = "Bellator Fragment";
        table.rows[5].cells[0].innerHTML = "Abyssal Tragedy";
      }

      table.rows[6].cells[0].innerHTML = "Aquaborne Astra";
      table.rows[7].cells[0].innerHTML = "Moon Idean";
      break;
    case "sun":
      table.rows[2].cells[0].innerHTML = "Sun Veritas";
      table.rows[3].cells[0].innerHTML = "Fire Verum Proof";
      table.rows[4].cells[0].innerHTML = "Ignis Luster";

      if (uncapLevel === "three" || uncapLevel === "four") {
        table.rows[5].cells[0].innerHTML = "Wilnas' Jewel";
      }

      if (uncapLevel === "five") {
        table.rows[3].cells[0].innerHTML = "Aquila Fragment";
        table.rows[5].cells[0].innerHTML = "Smoldering Rubble";
      }

      table.rows[6].cells[0].innerHTML = "Flameborne Astra";
      table.rows[7].cells[0].innerHTML = "Sun Idean";
      break;
    case "judgement":
      table.rows[2].cells[0].innerHTML = "Judgement Veritas";
      table.rows[3].cells[0].innerHTML = "Wind Verum Proof";
      table.rows[4].cells[0].innerHTML = "Ventus Luster";

      if (uncapLevel === "three" || uncapLevel === "four") {
        table.rows[5].cells[0].innerHTML = "Ewiyar's Jewel";
      }

      if (uncapLevel === "five") {
        table.rows[3].cells[0].innerHTML = "Bellator Fragment";
        table.rows[5].cells[0].innerHTML = "Gale Rock";
      }

      table.rows[6].cells[0].innerHTML = "Windborne Astra";
      table.rows[7].cells[0].innerHTML = "Judgement Idean";
      break;
    default:
      console.log("Previous Arcarum displaying.");
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
  // Refresh the page so the previous HTML displays instead of the table
  location.reload();
}

const handleUncapButtonClick = (event) => {
  // This lets us know which button was just pressed based on the button's text
  const buttonText = event.target.textContent;

  // Send the buttonText to the setupTable function so we know which material spread to load
  switch (table.rows[2].cells[0].innerHTML) {
    case "Justice Veritas":
      if (buttonText === "1 ★") {
        setupTable("justice", "one");
      } else if (buttonText === "2 ★") {
        setupTable("justice", "two");
      } else if (buttonText === "3 ★") {
        setupTable("justice", "three");
      } else if (buttonText === "4 ★") {
        setupTable("justice", "four");
      } else if (buttonText === "5 ★") {
        setupTable("justice", "five");
      } else if (buttonText === "Full Uncap") {
        setupTable("justice", "full");
      } break;
    case "Hanged Man Veritas":
      if (buttonText === "1 ★") {
        setupTable("hanged-man", "one");
      } else if (buttonText === "2 ★") {
        setupTable("hanged-man", "two");
      } else if (buttonText === "3 ★") {
        setupTable("hanged-man", "three");
      } else if (buttonText === "4 ★") {
        setupTable("hanged-man", "four");
      } else if (buttonText === "5 ★") {
        setupTable("hanged-man", "five");
      } else if (buttonText === "Full Uncap") {
        setupTable("hanged-man", "full");
      } break;
    case "Death Veritas":
      if (buttonText === "1 ★") {
        setupTable("death", "one");
      } else if (buttonText === "2 ★") {
        setupTable("death", "two");
      } else if (buttonText === "3 ★") {
        setupTable("death", "three");
      } else if (buttonText === "4 ★") {
        setupTable("death", "four");
      } else if (buttonText === "5 ★") {
        setupTable("death", "five");
      } else if (buttonText === "Full Uncap") {
        setupTable("death", "full");
      } break;
    case "Temperance Veritas":
      if (buttonText === "1 ★") {
        setupTable("temperance", "one");
      } else if (buttonText === "2 ★") {
        setupTable("temperance", "two");
      } else if (buttonText === "3 ★") {
        setupTable("temperance", "three");
      } else if (buttonText === "4 ★") {
        setupTable("temperance", "four");
      } else if (buttonText === "5 ★") {
        setupTable("temperance", "five");
      } else if (buttonText === "Full Uncap") {
        setupTable("temperance", "full");
      } break;
     case "Devil Veritas":
      if (buttonText === "1 ★") {
        setupTable("devil", "one");
      } else if (buttonText === "2 ★") {
        setupTable("devil", "two");
      } else if (buttonText === "3 ★") {
        setupTable("devil", "three");
      } else if (buttonText === "4 ★") {
        setupTable("devil", "four");
      } else if (buttonText === "5 ★") {
        setupTable("devil", "five");
      } else if (buttonText === "Full Uncap") {
        setupTable("devil", "full");
      } break;
    case "Tower Veritas":
      if (buttonText === "1 ★") {
        setupTable("tower", "one");
      } else if (buttonText === "2 ★") {
        setupTable("tower", "two");
      } else if (buttonText === "3 ★") {
        setupTable("tower", "three");
      } else if (buttonText === "4 ★") {
        setupTable("tower", "four");
      } else if (buttonText === "5 ★") {
        setupTable("tower", "five");
      } else if (buttonText === "Full Uncap") {
        setupTable("tower", "full");
      } break;
    case "Star Veritas":
      if (buttonText === "1 ★") {
        setupTable("star", "one");
      } else if (buttonText === "2 ★") {
        setupTable("star", "two");
      } else if (buttonText === "3 ★") {
        setupTable("star", "three");
      } else if (buttonText === "4 ★") {
        setupTable("star", "four");
      } else if (buttonText === "5 ★") {
        setupTable("star", "five");
      } else if (buttonText === "Full Uncap") {
        setupTable("star", "full");
      } break;
    case "Moon Veritas":
      if (buttonText === "1 ★") {
        setupTable("moon", "one");
      } else if (buttonText === "2 ★") {
        setupTable("moon", "two");
      } else if (buttonText === "3 ★") {
        setupTable("moon", "three");
      } else if (buttonText === "4 ★") {
        setupTable("moon", "four");
      } else if (buttonText === "5 ★") {
        setupTable("moon", "five");
      } else if (buttonText === "Full Uncap") {
        setupTable("moon", "full");
      } break;
    case "Sun Veritas":
      if (buttonText === "1 ★") {
        setupTable("sun", "one");
      } else if (buttonText === "2 ★") {
        setupTable("sun", "two");
      } else if (buttonText === "3 ★") {
        setupTable("sun", "three");
      } else if (buttonText === "4 ★") {
        setupTable("sun", "four");
      } else if (buttonText === "5 ★") {
        setupTable("sun", "five");
      } else if (buttonText === "Full Uncap") {
        setupTable("sun", "full");
      } break;
    case "Judgement Veritas":
      if (buttonText === "1 ★") {
        setupTable("judgement", "one");
      } else if (buttonText === "2 ★") {
        setupTable("judgement", "two");
      } else if (buttonText === "3 ★") {
        setupTable("judgement", "three");
      } else if (buttonText === "4 ★") {
        setupTable("judgement", "four");
      } else if (buttonText === "5 ★") {
        setupTable("judgement", "five");
      } else if (buttonText === "Full Uncap") {
        setupTable("judgement", "full");
      } break;
    default:
      console.log("Previous table displaying.");
  }

  render();
}

const setupUncapButtons = () => {
  let uncapButtons = [];

   // Add each uncap level to the container, then add a class name to the buttons so they are styled
   const oneStarUncapButton = document.createElement("button");
   oneStarUncapButton.innerHTML = "1 &#9733;"; // &#9733; is HTML code for a solid star symbol
   oneStarUncapButton.classList.add("uncap-button");
 
   const twoStarUncapButton = document.createElement("button");
   twoStarUncapButton.innerHTML = "2 &#9733;";
   twoStarUncapButton.classList.add("uncap-button");
 
   const threeStarUncapButton = document.createElement("button");
   threeStarUncapButton.innerHTML = "3 &#9733;";
   threeStarUncapButton.classList.add("uncap-button");
 
   const fourStarUncapButton = document.createElement("button");
   fourStarUncapButton.innerHTML = "4 &#9733;";
   fourStarUncapButton.classList.add("uncap-button");
 
   const fiveStarUncapButton = document.createElement("button");
   fiveStarUncapButton.innerHTML = "5 &#9733;";
   fiveStarUncapButton.classList.add("uncap-button");
 
   const fullUncapButton = document.createElement("button");
   fullUncapButton.innerHTML = "Full Uncap";
   fullUncapButton.classList.add("uncap-button");

   // Add an event listener for clicking onto each button
   uncapButtons.push(oneStarUncapButton, twoStarUncapButton, threeStarUncapButton, fourStarUncapButton, fiveStarUncapButton, fullUncapButton);
   uncapButtons.forEach(button => {
    button.addEventListener("click", handleUncapButtonClick);
   });

   return uncapButtons;
}

// This function will check which button it received and display the appropriate HTML
const render = (buttonText) => {
  // Reset the page
  document.getElementById("container").innerHTML = "";

  // This is the container we will be adding HTML to
  let element = document.createElement("div");
  
  // Check which button has been pressed so we know what elements to load into the table
  switch (buttonText) {
    case "Rise of Justice":
      table.style = "background-color: rgb(31, 81, 255); opacity: 100%;";
      setupTable("justice", "one");
      break;
    case "Binds of the Hanged Man":
      table.style = "background-color: rgb(205, 127, 50); opacity: 100%;";
      setupTable("hanged-man", "one");
      break;
    case "Pain of Death":
      table.style = "background-color: rgb(54, 69, 79); opacity: 100%;";
      setupTable("death", "one");
      break;
    case "Theater of Temperance":
      table.style = "background-color: rgb(0, 163, 108); opacity: 100%;";
      setupTable("temperance", "one");
      break;
    case "Kiss of the Devil":
      table.style = "background-color: rgb(227, 66, 52); opacity: 100%;";
      setupTable("devil", "one");
      break;
    case "Collapse of the Tower":
      table.style = "background-color: rgb(205, 127, 50); opacity: 100%;";
      setupTable("tower", "one");
      break;
    case "Shooting of the Star":
      table.style = "background-color: rgb(255, 191, 0); opacity: 100%;";
      setupTable("star", "one");
      break;
    case "Reflection of the Moon":
      table.style = "background-color: rgb(31, 81, 255); opacity: 100%;";
      setupTable("moon", "one");
      break;
    case "Heat of the Sun":
      table.style = "background-color: rgb(227, 66, 52); opacity: 100%;";
      setupTable("sun", "one");
      break;
    case "Melody of Judgement":
      table.style = "background-color: rgb(0, 163, 108); opacity: 100%;";
      setupTable("judgement", "one");
      break;
    default:
      console.log("Loading table.");
  }

  // add the element to the container
  const arcarumList = document.getElementById("container");
  arcarumList.appendChild(element);

  // Add a button that takes you back to the previous screen
  const backButton = document.createElement("button");
  backButton.innerText = "Back";
  backButton.classList.add("back-button");
  backButton.onclick = handleBackButtonClick;
  element.appendChild(backButton);
  
  // Add the table to the screen
  element.appendChild(table);

  // Create a container to store every button related to the uncap level
  const uncapButtonsDiv = document.createElement("div");
  uncapButtonsDiv.style = "display: flex; flex-direction: row; margin-top: 30px;";

  // Add each uncap level to the container, then add a class name to the buttons so they are styled
  const uncapButtons = setupUncapButtons();

  // Append each button the container
  uncapButtonsDiv.appendChild(uncapButtons[0]);
  uncapButtonsDiv.appendChild(uncapButtons[1]);
  uncapButtonsDiv.appendChild(uncapButtons[2]);
  uncapButtonsDiv.appendChild(uncapButtons[3]);
  uncapButtonsDiv.appendChild(uncapButtons[4]);
  uncapButtonsDiv.appendChild(uncapButtons[5]);

  // Add the container to the element
  element.appendChild(uncapButtonsDiv);
}

setupButtons();