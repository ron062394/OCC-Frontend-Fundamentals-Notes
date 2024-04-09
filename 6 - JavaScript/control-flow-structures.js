// Control Flow Structures

//1. Conditional statements
// Conditionals: if statement
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote!");
};


//Conditionals: if-else Statement
let temperature  = 30;
if (temperature < 0) {
    console.log("It is freezing!");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It is cool outside!");
} else {
    console.log("It is a warm day!");
    console.log("It is a warm day!");
    console.log("It is a warm day!");
}


//Conditionals: switch Statement
let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log("It is the start of the week.");
        break;
    case 'Friday':
        console.log("It is the end of the week.");
        break;
    default:
        console.log("It is a regular day.");
        break;
}

// 2. Looping statement

// Loops: for loop
for (let i = 1; i <= 5; i++ ) {
    console.log('for loop count:', i);
}


//Loops: while loop
let count = 1;
while (count <= 5) {
    console.log('while loop count:', count);
    count++;
}

// Loops: do-while loop
let i = 10;
do {
    console.log('Do-while count:', i)
    i++;
} while (i <= 5);

