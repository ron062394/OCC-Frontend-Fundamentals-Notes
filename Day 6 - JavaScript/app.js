//Functions allows us to write reusable block of codes that can executed whenever needed

//Defining a function
function greet() {
    console.log('Hello, welcome to the world of functions!');
    console.log('Yehey!')
}
// Calling a function
greet();


// Defining Functions with parameter
//a, b are called parameters 
function sum(a, b) {
    console.log("Calculating the value...")
    return a + b;
    console.log("Calculation done!") //Muted / Cannot be reached anymore
}

// Calling Functions with parameter
//The value that we are passing is called argument
console.log(sum(5, 8)); 