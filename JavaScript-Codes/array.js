
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



// WAP in js using array method. Also Define them in short. 


// 1. concat() - Joins two arrays
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b)); // [1, 2, 3, 4]

// 2. toString() - Makes array a string
let fruits = ["Apple", "Banana"];
console.log(fruits.toString()); // "Apple,Banana"

// 3. indexOf() - Finds position of item
let nums = [10, 20, 30];
console.log(nums.indexOf(20)); // 1

// 4. find() - Gets first matching item
let ages = [17, 18, 19];
console.log(ages.find(age => age >= 18)); // 18

// 5. slice() - Copies part of array
let letters = ['a', 'b', 'c', 'd'];
console.log(letters.slice(1, 3)); // ['b', 'c']

// 6. sort() - Sorts array (alphabetically by default)
let numbers = [3, 1, 4, 2];
numbers.sort();
console.log(numbers); // [1, 2, 3, 4]
