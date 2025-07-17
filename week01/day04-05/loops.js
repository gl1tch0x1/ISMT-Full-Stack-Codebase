// for loop
for (let i = 0; i < 8; i++) {
  console.log(i);
}

// for ... in loop
const phone = {
  brand: "Apple",
  model: "iPhone 15",
  storage: "128GB",
};

for (let property in phone) {
  console.log(`${property}: ${phone[property]}`);
}


// // for ... of loop
const prices = new Map([
  ["Laptop", 1000],
  ["Phone", 500],
  ["Tablet", 300],
]);

for (let [item, price] of prices) {
  console.log(`${item}: $${price}`);
}

// while loop example
let i = 3;
while (i > 0) {
  console.log("i =", i);
  i--;
}

// do while loop example
let password;
do {
  password = prompt("Enter password (min 6 characters):");
} while (password.length < 6);

console.log("Password accepted!");