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


// Q6. WAP to check if the number is prime or not. (function)

let number01 = prompt("Enter a number: ");
function isPrime(n) {
  if (n < 2) {
    alert(n + " is not a prime number.");
    return;
  }

  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    alert(n + " is a prime number.");
  } else {
    alert(n + " is not a prime number.");
  }
}
isPrime(Number(number01));




// Q7. WAP to if the user is authenticated person or not.(function) [authenticatedPerson = "Ram", "Shyam", "Suresh", "Rupesh".]

let user = prompt("Enter your name:");
function checkUser(name) {
    if (name === "Ram" || name === "Shyam" || name === "Suresh" || name === "Rupesh") {
        console.log("Welcome, " + name + " you are authenticated.");
    } else {
        console.log("Sorry, " + name + " is NOT an authenticated.");
    }
}
checkUser(user);
