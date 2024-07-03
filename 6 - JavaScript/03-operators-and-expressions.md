```javascript
// Operators and Expressions

// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Exponent (**):", num1 ** num2);
console.log("Remainder (%):", num1 % num2);

// Order of Operations
// PEMDAS / BODMAS
// BODMAS - Bracket, Order, Division, Multiplication, Addition, and Subtraction
// PEMDAS - Parentheses, Exponents, Multiplication and Division (same level), and Addition and Subtraction (same level)

let answer = 3 + 4 * (5 - 2) ** 2 / 2;
console.log("Answer:", answer); // 21

// 2. String Expressions or concatenation
console.log("Hello" + " " + "World!");
let greeting = "Hi";
let myName = "John";
console.log(greeting + " " + myName + ".");

// 3. Comparison Operators
// type coercion (convert types if necessary)
// Equal to '==' : Checks if two values are equal
console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==) with type coercion:", 5 == '5');
// Not Equal to '!=' : Checks if two values are not equal
console.log("Not Equal to (!=):", 5 =! 5);
console.log("Not Equal to (!=) with type coercion:", 5 =! '5');
// Strict equal to '===': Checks if two values are equal in value and type
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===):", 5 === '5');
// Strict not equal to '!==': Checks if two values are not equal in value or type
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==):", 5 !== '5');

console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 3 < 5);
console.log("Greater Than or Equal To (>=):", 5 >= 3);
console.log("Less Than or Equal To (<=):", 3 <= 5);

// 4. Logical Operators
// && - AND - Amphersand
// || - OR - Pipe
// ! - NOT - Exclamation Mark

let sunny = true;
let warm = false;

// AND: True only if all conditions are met
console.log("Is it sunny AND warm?", sunny && warm);

// OR: True if at least one condition is met
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: Inverts the boolean value
console.log("NOT sunny?", !sunny);

// 5. Assignment Expressions
// Assigning a value to a variable
let num3 = 10;
let num4 = 5;

// Addition Assignment '+='
// Computation: 10 + 5 = 15
num3 += num4;
console.log("The new value of a is:", num3);

// Subtraction Assignment '-='
// Computation: 15 - 5 = 10
num3 -= num4;
console.log("The new value of a is:", num3);

// Multiplication Assignment '*='
// Computation: 10 * 5 = 50
num3 *= num4;
console.log("The new value of a is:", num3);

// Division Assignment '/='
// Computation: 50 / 5 = 10
num3 /= num4;
console.log("The new value of a is:", num3);

// Exponent Assignment '**='
// Computation: 10 ** 5 = 100,000
num3 **= num4;
console.log("The new value of a is:", num3);

// Remainder Assignment '%='
// Computation: 100,000 % 5 = 0
num3 %= num4;
console.log("The new value of a is:", num3);
```