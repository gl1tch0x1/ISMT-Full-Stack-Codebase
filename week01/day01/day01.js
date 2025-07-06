// # VARIABLES:

// 1. let  (example):
    let y = 5;
    // let y = 15; // Error: Cannot re-declare block-scoped variable 'y'
    y = 25;      // Update is allowed
    console.log(y) // printing the output

// 2. var (example):
    var x = 10;
    var x = 20; // Re-declaration is allowed
    x = 30;     // Update is allowed
    console.log(x)

// 3. const (example):
    const PI = 3.14;
    // PI = 3.14159; // Error: Assignment to constant variable
    // const PI = 3.14159; // Error: Cannot re-declare block-scoped variable 'PI'

    const person = { name: "Alice" };
    person.name = "Bob"; // Allowed: modifying object content
    // person = { name: "Charlie" }; // Error: Assignment to constant variable
    console.log(person)

// --------------------------------------------------------------------------------------------------------

// B. DATATYPES:  
let number = 23 //num
let college =  "ismt" //string
let c1 = true //boolean
let data1 = null  //null
let a = undefined //undefinded

console.log(number, college,  c1, data1, a)