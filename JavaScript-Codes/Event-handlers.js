/*

Event Handlers in JavaScript: can be used to respond to user interactions with 
the web page. These handlers can be attached to various DOM elements
to perform actions when events occur, such as clicks (mouse events), form submissions,
and keyboard events.
Example: onclick(), onmouseover(), onkeydown(), onsubmit(), etc....

*/

// reference to JS DOM event Handlers: https://www.w3schools.com/jsref/dom_obj_event.asp

// Example of an event handler for a button click
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        alert("Button was clicked!");
    });
});

// Example of an event handler for a form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert("Form submitted!");
    });
});

// Example of an event handler for a mouseover event
document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("myElement");
    element.addEventListener("mouseover", function() {
        this.style.backgroundColor = "yellow"; // Change background color on mouseover
    });
    element.addEventListener("mouseout", function() {
        this.style.backgroundColor = ""; // Reset background color on mouseout
    });
});

// Example of an event handler for a keydown event
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert("Enter key was pressed!");
    }
});

