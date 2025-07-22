// // for loop
// for (let i = 0; i < 8; i++) {
//   console.log(i);
// }

// for ... in loop
// const phone = {
//   brand: "Apple",
//   model: "iPhone 15",
//   storage: "128GB",
// };

// for (let property in phone) {
//   console.log(`${property}: ${phone[property]}`);
// }




// // // for ... of loop
// const prices = new Map([
//   ["Laptop", 1000],
//   ["Phone", 500],
//   ["Tablet", 300],
// ]);

// for (let [item, price] of prices) {
//   console.log(`${item}: $${price}`);
// }

// while loop example
// let i = 3;
// while (i > 0) {
//   console.log("i =", i);
//   i--;
// }

// // do while loop example
// let password = "hellothere";
// do {
// } while (password.length < 6);

// console.log("Password accepted!");





// let address = new Map([
//   ["Country", "Nepal"],
//   ["State", "Lumbini"],
//   ["City", "Butwal"],
// ]);

// for (let [key, value] of address){
//   console.log(`${key}: ${value}`)
// }



// Practice Set - chapter 03
/*
//WAP to print the marks of a student using for loop

let marks = {
    ram: 90,
    rohan: 70,
    ravi: 75
}

for (let i = 0; i < marks.length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}


//WAP to print the marks of a student using for in loop

let marking = {
    ram: 95,
    rohan: 75,
    ravi: 70
}

for (let key in marking) {
    console.log("The marks of " + key + " are " + marking[key]);
}

//WAP to print "try again" until the user enters the correct number

let password = "hellothere"
let check;
do {
    check = prompt("Enter the password: ");
    if (check != password){
        console.log("Try again");
    }
}
while (check != password);
console.log("Password is correct!")
*/