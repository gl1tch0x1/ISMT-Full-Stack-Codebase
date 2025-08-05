/*
In the Loops using Array,we will explore how to use loops to iterate over arrays in
JavaScript.This includes using`for`, `for...of`, and`for...in` methods to access 
and manipulate array elements.*/

let fruits = ['apple', 'banana', 'cherry', 'mango'];

// Using a for loop: is used to iterate over the array elements by index
/*
for (let i=0; i<fruits.length; i++){ // Accessing each element using index
    console.log(fruits[i]); // calling each element
}
*/


// Using for ..of loop: is used to iterate over the array elements directly

/*
for (let fruit of fruits){
    console.log(fruit); // Accessing each element directly
}
    */

// Using for..in loop: is used to iterate over the array indices

/*
for (let index in fruits){
    console.log(fruits[index]); // Accessing each element using index
}
    */

// Using forEach Method: is a built-in method to iterate over array elements

/*
fruits.forEach(function(fruit) {
    console.log(fruit); // Accessing each element directly
}
);
*/

// Using Array.from() Method: creates a new array from an array-like or iterable object

/*

let name = "bishnu"
let arr = Array.from(name)
console.log(arr)

*/


// Practice Exercise: 
/*

1. Create an array of numbers and use a loop to print each number squared.(prompt)

2. Create an array of numbers and take input from the user to add numbers to this array.
3. Keep adding numbers to the array (1) until the user enters 'Zero (0)'.
4. Create a array of square of given number in question 1.

*/

// Q1. Create an array of numbers and use a loop to print each number squared.
// Using prompt to take input from the user
let num = prompt("Enter the numbers of elements and seprate them with a comma: ");

num = num.split(',').map(Number); // Convert input string to an array of numbers
for (let i = 0; i<num.length; i++){ // Looping through each number in the array
    console.log(num[i] * num[i]); // Printing each number squared
}

