// JS Operators and expressions

//1. Arithmetic Operators
let x = 21;
let y = 10;

//Addition '+'
let sum = x + y;
console.log('Sum:', sum);


//Substraction '-'
let difference = x - y;
console.log('Difference:', difference);


//Multiplication '*'
let product = x * y;
console.log('Product:', product);


//Division '/'
let quotient = x / y;
console.log("Quotient:", quotient);



//Remainder or Modulo '%'
let remainder = x % y;
console.log('Remainder', remainder);

let answer = 10 / 2 * 23 / 2;
console.log(answer)


// 2. String Expressions or concatenation
console.log("Hello" + " " + "World!");
let greeting = "Hi";
let myName = "John";
console.log(greeting + " " + myName + ".");



//3. Logical expressions (&&, ||, !)
let sunny = true;
let warm = true;
console.log("Is it sunny AND warm?", sunny && warm);
console.log("Is it sunny OR warm?", sunny || warm);
console.log("NOT sunny?", !sunny);


//4. Assignment expressions
let a = 10;
let b = 5;

a += b;
console.log("The new value of a is:", a);


a -= b;
console.log("The new value of a is:", a);

a *= b;
console.log("The new value of a is:", a);

a /= b;
console.log("The new value of a is:", a);