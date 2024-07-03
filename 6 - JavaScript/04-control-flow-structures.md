```javascript
// Control Flow Structures

// 1. Conditional Statements - allow you to execute different blocks of code based on a condition.

// Conditionals: if, else if, else statements
// Use: Complex conditions
let temperature = 25;
if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
  console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30) {
  console.log("It's warm outside.");
} else {
  console.log("It's hot outside.");
}

// Conditionals: switch-case statements
// Use: Checking for exact value
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It is the start of the week.");
    break;
  case "Friday":
    console.log("It is the end of the week.");
    break;
  default:
    console.log("It is a regular day.");
}

// 2. Looping Statements - are used to repeatedly execute a block of code until a specific condition is met. 
// They provide a way to automate repetitive tasks.

// Loops: for loop
for (let i = 1; i <= 3; i++) {
  console.log("for loop count:", i);
}

// Loops: while loop
let count = 1;
while (count <= 3) {
  console.log("while loop count:", count);
  count++;
}

// Loops: do-while loop
let counter = 10;
do {
  console.log("Do-while count:", counter);
  counter++;
} while (i <= 3);
```