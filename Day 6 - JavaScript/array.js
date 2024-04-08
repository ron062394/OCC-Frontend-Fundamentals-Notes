// Arrays and Array methods
// Array - allows us to store multiple values in a single variable


//Creating an array
let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry']; // 0 based index

//Accessing array elements
console.log('First fruit:', fruits[0] );
console.log('Second fruit:', fruits[1] );

//length - to get the number of value inside an array
console.log(fruits.length);
console.log('Last fruit:', fruits[fruits.length -1]);

//Modifiying array
fruits[1] = 'grape'; //update an element
console.log(fruits);

//Add another element / .push method
fruits.push('Star Apple');
console.log(fruits);

//Remove the last element / .pop method
fruits.pop();
console.log(fruits);


//Array iteration with for loop
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Array iteration with forEach Method
let colors = ['red', 'green', 'blue'];
colors.forEach(function(color){
    console.log(color);
});


// .indexof() to get the index number of a value inside an array
console.log('Index of 3:', numbers.indexOf(5));


// .includes() checks if the value is included in an array(will return either true or false)
console.log('Includes 5', numbers.includes(10));

// .join() use to join elements into a single string
console.log('Joined array:', numbers.join('-'));

// let numbers = [1, 2, 3, 4, 5];

// .sliced() extracts a portion of the array and returns a new array without modifying the original array
let slicedArray = numbers.slice(1, 3);
console.log('Sliced array:', slicedArray);

// .splice() modifies the original array by removing elements to it.
let removedElements = numbers.splice(2, 3);
console.log('Removed elements:', removedElements);
console.log('Updated array:', numbers);
