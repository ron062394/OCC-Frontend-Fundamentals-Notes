// Accessing Element using .getElementById() Selector
// Return: Element and Null

let elementWithID = document.getElementById("first-div");
console.log("Element accessed using ID:", elementWithID);

// Modify element .textContent property
elementWithID.textContent = "Div 1";

// Accessing Elements using the .getElementByClassName() Selector
// Return: HTML Collection

let elementsWithClass = document.getElementsByClassName("sample-div");
console.log('Elements with class "sample-div":', elementsWithClass);

// Modify element .textContent property using index
elementsWithClass[1].textContent += " 2";

// Modify element .textContent property using for loop
for (let i = 0; i < elementsWithClass.length; i++) {
  let element = elementsWithClass[i];
  element.textContent += " is updated!";
}

// Access Elements using .getElementByTagName() Selector
// Return: HTML Collection
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);

// Modify element .backgroundColor property using index
listItems[0].style.backgroundColor = "yellow";

// Modify element .textContent property using for loop
for (let i = 0; i < listItems.length; i++) {
  let listItem = listItems[i];
  listItem.style.backgroundColor = "yellow";
}

// Access Element using .querySelector()
// Return: First Element or Null
let orderedListItem = document.querySelector(".ordered-list");
console.log("Ordered List Items:", orderedListItem);
orderedListItem.style.backgroundColor = "green";

// Access Elements using .querySelectorAll()
// Return: NodeList
let headings = document.querySelectorAll("h3");
console.log("Heading Tags:", headings);

// Modify element .backgroundColor property using index
headings[0].style.backgroundColor = "aqua";

// Modify element .backgroundColor property using for loop
for (let i = 0; i < headings.length; i++) {
  let heading = headings[i];
  heading.style.backgroundColor = "aqua";
}

// Adding Event Listeners
let button = document.getElementById("button");
button.addEventListener("click", function () {
  let buttonDiv = document.getElementById("button-div");
  alert("Button clicked!");
  buttonDiv.textContent = "Hello World!";
});

// Appending New Elements
let append = document.getElementById("append");
let newElement = document.createElement("div");
newElement.textContent = "Newly Appended Element";
append.appendChild(newElement);

// Removing an Element
let elementToBeRemoved = document.getElementById("remove");
elementToBeRemoved.remove()

// Updating Element Attributes
let image = document.getElementById("image");
image.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Manipulating Element Styles
let style = document.getElementById("style");
style.style.backgroundColor = "black";
style.style.color = "white";
let mode = document.getElementById("mode");
mode.textContent = "Dark Mode";
