
/*
Array in JavaScript:
An array is a data structure that can hold multiple values in a single variable. OR
    An array is a container that holds the value of similar data types.
---------------------------------------------------------

*/

// simple example of an array:

let name = ["hari", "krishna", "ram"]; // this is an array of strings
let numbers = [1, 2, 3, 4, 5]; // this is an array of numbers

console.log(name[0]); // returns the first element of the array
console.log(numbers[1]); // returns the second element of the array


// Method in array (array methods):


let name1 = ["hari", "krishna", "ram"]; 
let name2 = ["ha", "kri", "ra"]; 
let name3 = ["har", "kris", "r"]; 
let name4 = ["abc", "def", "ghi"]; // this is an array of strings


// push method in array:
name1.push("abc"); // adds "abc" to the end of the array

//pop method in array:
name2.pop() // pops out the last element of the array in the list.


//unshift method in array:
name3.unshift("govinda") // adds the element in the 0th index of the array list.

// replace method in array:
name1[1] = "abcd"; //replace the second element of the array with "abcd"


console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

// WAP to create a array using,
// Define them in short. 

/*

1. concat()
2. toString()
3. indexOf()
4. find()
5. slice()
6. sort()

*/
