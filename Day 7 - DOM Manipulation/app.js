// Accessing Element using ID
var elementWithID = document.getElementById('student1');
console.log('Element accessed using ID:', elementWithID);
// Modifying ID
elementWithID.textContent = 'student 1 - Anna'; // Change the ID to 'new-parent'

// Accessing Elements using Class
var elementsWithClass = document.getElementsByClassName('section-A');
console.log('Elements with class "section-A":', elementsWithClass);

// Modifying class
for (var i = 0; i < elementsWithClass.length; i++) {
  var element = elementsWithClass[i];
  element.textContent += ' enrolled!'; // Append 'modified-section' class
}


// Accessing Element by TagName and modifying style
var styleElement = document.getElementsByTagName('span')[0]; // Assuming it's the 6th div in your HTML structure
console.log('Element to modify style:', styleElement);
styleElement.style.backgroundColor = 'lightblue'; // Modify style



// Accessing first and last element child nodes
const firstElementChild = document.getElementById('parent').firstElementChild;
console.log('First Element Child:', firstElementChild);
firstElementChild.textContent = 'Modified first Child'
const lastElementChild = document.getElementById('parent').lastElementChild;
console.log('Last Element Child:', lastElementChild);
lastElementChild.textContent = 'Modified last Child'


// Previous sibling
var child3 = document.getElementById('child3');
var previousSibling = child3.previousElementSibling;
console.log('Previous Sibling:', previousSibling);
previousSibling.style.backgroundColor = 'lightblue';


// Next sibling
var targetChild = document.getElementById('child3');
var nextSibling = targetChild.nextElementSibling;
console.log('Next Sibling:', nextSibling);
nextSibling.innerHTML = '<strong>Modified Child 4</strong>';



// Adding event listener
var button = document.getElementById('button');
button.addEventListener('click', function() {
    var buttonDiv = document.getElementById('buttonDiv');
    buttonDiv.textContent = 'Hello World!';
    alert('Button clicked!');
});


// Modifying element content
var modify = document.getElementById('modify');
modify.textContent = 'Modified content';


// Appending new elements
var append = document.getElementById('append');
var newElement = document.createElement('div');
newElement.textContent = 'Newly Appended Element';
append.appendChild(newElement);


// Updating element attributes
var image = document.getElementById('image');
image.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3688/3688129.png');




// Manipulating element styles
var style = document.getElementById('style');
style.style.backgroundColor = 'black';
style.style.color = 'white';
var mode = document.getElementById('mode');
mode.textContent = 'Dark Mode';