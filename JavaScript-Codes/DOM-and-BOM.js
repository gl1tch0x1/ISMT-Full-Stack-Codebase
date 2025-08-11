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
/*
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
*/

// Introduction to DOM manipulation with examples,

/*

Que.No.:01 What is a DOM Event in JavaScript?

DOM Event in JavaScript is an action or occurrence that happens in the browser which the browser recognizes 
and can respond to — such as a user clicking a button, typing in a field, or hovering over an element.
You can attach event handlers using:

1. HTML attributes (not recommended)
2. JavaScript DOM methods (recommended)

Simple example of a DOM event:
*/


// 1. onclick – Click on an element

//JS code:
document.getElementById("myButton").onclick = function () {
    alert("Button clicked!");
};

// HTML code:
<button onclick="alert('Button clicked!')">Click Me</button>


// 2. ondblclick – Double-click on an element

// JS code:
document.getElementById("myButton").ondblclick = function () {
    alert("Button double-clicked!");
};

// HTML code:
<button ondblclick="alert('Button double-clicked!')">Double Click Me</button>


// 3. onmouseover – Mouse pointer moves over an element

// JS code:
document.getElementById("myDiv").onmouseover = function () {
    this.style.backgroundColor = "yellow";
}

// HTML code:
<p onmouseout="this.style.color='black'" style="color:blue;">Move your mouse away</p>


// 4. onmouseout – Mouse pointer moves out of an element

// JS code:
document.getElementById("myDiv").onmouseout = function () {
    this.style.backgroundColor = "white";
}

// HTML code:
<p onmouseout="this.style.color='black'" style="color:blue;">Move your mouse away</p>


// 5. onkeydown – Key pressed down

// JS code:
document.getElementById("myInput").onkeydown = function (event) {
    console.log("Key pressed: " + event.key);
};

// HTML code:
<input type="text" id="myInput" placeholder="Type something..."/>


// 6. onkeyup – Key is released

// JS code:
document.getElementById("myInput").onkeyup = function (event) {
    console.log("Key released: " + event.key);
}

// HTML code:
<input type="text" id="myInput" placeholder="Type something..."/>
