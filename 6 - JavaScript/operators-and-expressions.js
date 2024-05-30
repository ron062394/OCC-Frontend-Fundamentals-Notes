// JS Operators and expressions

// 1. Arithmetic Operators
let x = 21;
let y = 10;

// Addition '+'
let sum = x + y;
console.log("Sum:", sum);

// Substraction '-'
let difference = x - y;
console.log("Difference:", difference);

// Multiplication '*'
let product = x * y;
console.log("Product:", product);

// Division '/'
let quotient = x / y;
console.log("Quotient:", quotient);

// Remainder or Modulo '%'
let remainder = x % y;
console.log("Remainder", remainder);

let answer = ((10 / 2) * 23) / 2;
console.log(answer);

// 2. String Expressions or concatenation
console.log("Hello" + " " + "World!");
let greeting = "Hi";
let myName = "John";
console.log(greeting + " " + myName + ".");

// 3. Comparison Operators
// Equal to (==): This operator checks if two values are equal.
console.log("5 == 5:", 5 == 5); // true
console.log("5 == '5':", 5 == "5"); // true (converts string "5" to number)
console.log("'hello' == 'world':", "hello" == "world"); // false

// Not equal to (!=): This operator checks if two values are not equal.
console.log("5 != 5:", 5 != 5); // false
console.log("5 != '5':", 5 != "5"); // false (converts string to number)
console.log("'hello' != 'world':", "hello" != "world"); // true

// Strict equal to (===): This operator checks if two values are equal in both value and type.
console.log("5 === 5:", 5 === 5); // true
console.log("5 === '5':", 5 === "5"); // false (different types)
console.log("'hello' === 'world':", "hello" === "world"); // false

// Strict not equal to (!==): This operator checks if two values are not equal in value or type.
console.log("5 !== 5:", 5 !== 5); // false
console.log("5 !== '5':", 5 !== "5"); // true (different types)
console.log("'hello' !== 'world':", "hello" !== "world"); // true

// Greater than (>): This operator checks if the left operand is greater than the right operand.
console.log("5 > 3:", 5 > 3); // true
console.log("3 > 5:", 3 > 5); // false

// Less than (<): This operator checks if the left operand is less than the right operand.
console.log("5 < 3:", 5 < 3); // false
console.log("3 < 5:", 3 < 5); // true

// Greater than or equal to (>=): This operator checks if the left operand is greater than or equal to the right operand.
console.log("5 >= 5:", 5 >= 5); // true
console.log("5 >= 3:", 5 >= 3); // true
console.log("3 >= 5:", 3 >= 5); // false

// Less than or equal to (<=): This operator checks if the left operand is less than or equal to the right operand.
console.log("5 <= 5:", 5 <= 5); // true
console.log("5 <= 3:", 5 <= 3); // false
console.log("3 <= 5:", 3 <= 5); // true

// 4. Logical expressions (&&, ||, !)
let sunny = true;
let warm = true;
console.log("Is it sunny AND warm?", sunny && warm);
console.log("Is it sunny OR warm?", sunny || warm);
console.log("NOT sunny?", !sunny);

// 5. Assignment expressions
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
