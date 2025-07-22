// Q1. Write A Simple Function That Greets the User

function sayHello() { // Function Declaration
    console.log("Hello, welcome to NAME IT!");
}

sayHello(); // Calling the function



// Q2. Write A Function That Greets the User with their name

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

sayHello("Ram");


//  Q3. Write A Function That Returns a Value

function add(a, b) {
    return a + b;
}

let sum = add(2, 3);
console.log(sum);

// Q4. Write A Function to Check Even or Odd

let number = parseInt(prompt("Enter a number to check even or odd:"));

function isEven(number) {
  if (number % 2 === 0) {
    console.log(number + " is Even");
  } else {
    console.log(number + " is Odd");
  }
}

isEven(number);


// Q5. Write A Function That Prints Multiplication Table

let num = parseInt(prompt("Enter a number for multiplication table:"));

function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
  }
}

printTable(num);
