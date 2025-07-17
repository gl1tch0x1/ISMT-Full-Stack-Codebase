// Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.333...
console.log(a % b);  // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 1000
console.log(++a);    // Increment: 11
console.log(--b);    // Decrement: 2


// Assignment Operators
let x = 5;       // Simple assignment
x += 3;          // x = x + 3 → 8
x -= 2;          // x = x - 2 → 6
x *= 4;          // x = x * 4 → 24
x /= 3;          // x = x / 3 → 8
x %= 5;          // x = x % 5 → 3
x **= 2;         // x = x ** 2 → 9
console.log(x);  // 9


// Comparison Operators
let num1 = 5;
let num2 = '5';
let num3 = 10;

console.log(num1 == num2);   // Loose equality: true
console.log(num1 === num2);  // Strict equality: false
console.log(num1 != num3);   // Not equal: true
console.log(num1 !== num2);  // Strict not equal: true
console.log(num1 < num3);    // Less than: true
console.log(num1 > num3);    // Greater than: false
console.log(num1 <= num3);   // Less than or equal: true
console.log(num1 >= num3);   // Greater than or equal: false


// Logical Operators
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");
} else {
    console.log("Cannot drive");
}


// Conditional (Ternary) Operator
let ageof = 20;
let canVote = (ageof >= 18) ? "Yes" : "No";
console.log(canVote);  // "Yes"

// Another example
let temperature = 25;
let weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : "Cool";
console.log(weather);  // "Warm"



// Conditional Statements


// Simple if statement
let yourAge = 20;

if (yourAge >= 18) {
    console.log("You are an adult.");
}

// if...else statement

let isRaining = true;

if (isRaining) {
    console.log("Take an umbrella.");
} else {
    console.log("Enjoy the weather!");
}


// if...else if...else statement
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// switch statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);


// Ternary operator example

let isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(welcomeMessage); // "Welcome back!"