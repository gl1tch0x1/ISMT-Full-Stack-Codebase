/*
Strings in JavaScript: 
---------------------------------------------------------
String is a sequence of characters. It can be defined using single quotes, 
double quotes, or backticks in JavaScript. They are immutable, meaning once created, 
they cannot be changed. However, you can create a new string based on the original one.
Strings can be used to represent text, and they can include letters, numbers, symbols,
*/

let name = "hari" // this is a string. (double quote)
let name1 = 'krishna' // this is also a string. (single quote)
let name2 = `ram` // this is also a string. (backtick)

console.log(`${name} is a friend of ${name1} and ${name1} is the friend of ${name2}`)

// Indexing in string:
/*Indexing in string define as the position of the given string which will get index into the array or block of array. The indexing always starts from zero(0).*/

let abc = "nepal is a beautiful country"

console.log(name1[2]) // returns the 2nd index of the string
console.log(name1[4]) // returns the 4th index of the string

console.log(abc[42]) // here undefined is returned because the string index 42 is not found.


/*
String Methods:
----------------------------------------------------------
String methods are built-in functions that allow you to manipulate and work with strings
in JavaScript. They can be used to perform various operations such as searching, replacing, 
slicing, and formatting strings.
*/

let message = "   Hello, Welcome to the Metaverse!  ";

// String method examples:
let trimmed = message.trim(); // Removes whitespace from both ends
let upper = trimmed.toUpperCase(); // Converts to uppercase
let lower = trimmed.toLowerCase(); // Converts to lowercase
let includesWord = trimmed.includes("JavaScript"); // Checks if "JavaScript" is present
let replaced = trimmed.replace("World", "Universe"); // Replaces "World" with "Universe"
let sliced = trimmed.slice(7, 17); // Extracts a part of the string

// Output
console.log("Original:", message);
console.log("Trimmed:", trimmed);
console.log("Uppercase:", upper);
console.log("Lowercase:", lower);
console.log("Includes 'JavaScript'?", includesWord);
console.log("Replaced:", replaced);
console.log("Sliced (7-17):", sliced);

