"use strict"

const saiyans = [
    {
        name: "Goku",
        powerLevel: 9000,
        transformations: ["Super Saiyan", "Super Saiyan God", "Ultra Instinct"]
    },
    {
        name: "Vegeta",
        powerLevel: 8500,
        transformations: ["Super Saiyan", "Super Saiyan Blue", "Super Saiyan Blue Evolved"]
    },
    {
        name: "Gohan",
        powerLevel: 7500,
        transformations: ["Super Saiyan", "Super Saiyan 2", "Mystic Gohan"]
    },
     {
        name: "Monch",
        powerLevel: 150000,
        transformations: ["Super Saiyan", "Super Saiyan Rage"]
    }
];

//use DOM instead of window.onload
// Wait until the DOM content is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", init);

// Initialize the application by populating the dropdown and setting up event listeners
function init() {
  populateDropdown(); // Fill the dropdown with Saiyan options
  setupEventListeners(); // Set up the event listeners for button clicks
}

// Populate the dropdown menu with Saiyan names and power levels
function populateDropdown() {
    const dropdown = document.getElementById("saiyanDropdown"); // Get the dropdown element
    const fragment = document.createDocumentFragment(); // Create a document fragment to optimize DOM manipulation
  
    // Iterate over the saiyans array and create an option element for each Saiyan
    saiyans.forEach((saiyan) => {
      const option = document.createElement("option"); // Create a new option element
      option.value = saiyan.name; // Set the option value to the Saiyan's name
      option.textContent = `${saiyan.name} (${saiyan.powerLevel})`; // Set the displayed text to the Saiyan's name and power level
      fragment.appendChild(option); // Append the option to the document fragment
    });
  
    // Append the document fragment to the dropdown, reducing reflows and repaints
    dropdown.appendChild(fragment);
  }

// Set up event listeners for user interactions
function setupEventListeners() {
    // Add a click event listener to the "Show Selected Saiyan" button
    document
      .getElementById("showDetailsBtn")
      .addEventListener("click", showSelectedSaiyan);
  }


  const showDetailsBtn =  document.getElementById("showDetailsBtn")
  showDetailsBtn.addEventListener("click", showSelectedSaiyan);



document.getElementById("saiyanDropdown")
  .addEventListener("change", showSelectedSaiyan);


/*
  function showSelectedSaiyan() {
    const dropdown = document.getElementById("saiyanDropdown"); // Get the dropdown element
    const selectedSaiyan = dropdown.value; // Get the value of the selected option
    const detailsArea = document.getElementById("saiyanDetails"); // Get the paragraph element to display the details
    detailsArea.textContent = selectedSaiyan; // Set the paragraph text to the selected Saiyan's name
  }
*/

  function showSelectedSaiyanChange() {
    const dropdown = document.getElementById("saiyanDropdown"); // Get the dropdown element
    const selectedSaiyanName = dropdown.value; // Get the value of the selected option
    const detailsArea = document.getElementById("saiyanDetails"); // Get the paragraph element to display the details
  
    // Find the selected Saiyan object
    const selectedSaiyan = saiyans.find((saiyan) => saiyan.name === selectedSaiyanName);
  
    if (selectedSaiyan) {
      // Display the details of the selected Saiyan
      detailsArea.innerHTML = `
              <strong>Name:</strong> ${selectedSaiyan.name}<br>
              <strong>Power Level:</strong> ${selectedSaiyan.powerLevel}<br>
              <strong>Transformations:</strong> ${selectedSaiyan.transformations.join(
                ", "
              )}
          `;
    } else {
      // If no Saiyan is found, clear the details area
      detailsArea.innerHTML = "No Saiyan selected.";
    }
  }

  /*
  function setupEventListeners() {
    document.getElementById("showDetailsButton").addEventListener("click", showSelectedSaiyanChange);
}
*/

  //document.getElementById("showDetailsButton").addEventListener("click", showSelectedSaiyanChange);


  /*BRETT CODE
  function getSaiyanDetails() {
    const dropdown = getDropDown();
    let saiyanDetails = document.getElementById("saiyanDetails");
    let c = saiyanArray.find(s => s.name == dropdown.value);
    let a = '';
    a = `The Saiyan you selected is ${c.name}, they have a power level of ${c.powerLevel} and can transform into`;
    c.transformations.forEach(element => {
        a += ` ${element},`;
    });
    a = a.slice(0, -1);
    a += `.`;
    saiyanDetails.innerHTML = a;
}
  */