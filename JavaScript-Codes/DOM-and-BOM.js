// Starting the DOM manipulation in JS.

/*
DOM Manipulation: 
    In JS, the Document Object Model (DOM) represents the structure of a web page.
    You can manipulate the DOM using various methods and properties provided by the 
    browser's JavaScript API.

Ex: windows.alert("Hello World");

BOM Manipulation:
    In JS, the Browser Object Model (BOM) represents the interaction between the
    browser and the web page. You can manipulate the BOM using various methods
    and properties provided by the browser's JavaScript API.

Ex: window.location.href = "https://www.example.com";

*/

// Example of DOM manipulation
document.addEventListener("DOMContentLoaded", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph added to the DOM.";
    document.body.appendChild(newElement);
});


// Example of BOM manipulation
window.addEventListener("load", function() {
    console.log("The page has fully loaded.");
    alert("Welcome to the page!");
}
);
