```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Manipulation</title>
    <style>
        #page-container {
            width: 200px;
            height: 100px;
            border: 1px rgb(126, 126, 126) solid;
            background-color: aliceblue;
            padding: 10px;
        }
    </style>
</head>

<body>
    <h1>DOM MANIPULATION</h1>

    <div>
        <h3>Accessing Element using ID and Class</h3>
        <div>
            <div id="first-div" class="sample-div">Sample Div</div>
            <div id="second-div" class="sample-div">Div</div>
            <div id="third-div" class="sample-div">Div 3</div>
        </div>
    </div>

    <div>
        <h3>Accessing Element using TagName</h3>
        <h3>Unordered List</h3>
        <ul>
            <li class="unordered-list">Unordered List Item 1</li>
            <li class="unordered-list">Unordered List Item 2</li>
            <li class="unordered-list">Unordered List Item 3</li>
        </ul>
    </div>

    <div>
        <h3>Accessing Element using Query Selector</h3>
        <h3>Ordered List</h3>
        <ol>
            <li class="ordered-list">Ordered List Item 1</li>
            <li class="ordered-list">Ordered List Item 2</li>
            <li class="ordered-list">Ordered List Item 3</li>
        </ol>
    </div>

    <div>
        <h3>Updating Element Attributes</h3>
        <div>
            <img id="day-night-icon" style="height: 50px" src="https://cdn-icons-png.flaticon.com/512/624/624106.png"
                alt="Original Image" />
        </div>
    </div>

    <div>
        <h3>Appending New Elements</h3>
        <div id="parent-element">Parent Element</div>
    </div>

    <div>
        <h3>Removing Elements</h3>
        <div id="element-to-be-removed">Remove this element</div>
    </div>

    <div>
        <h3>Adding Event Listeners and Manipulating Element Styles</h3>
        <div>
            <button id="dark-mode-btn">Dark Mode</button>
        </div>
        <div id="page-container">
            <div id="page-mode-text">Light Mode</div>
            <div>Welcome to my profile</div>
        </div>
    </div>

    <script src="./app.js"></script>
</body>

</html>
```
```javascript
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
elementsWithClass[1].textContent = "Div 2";

// Access Elements using .getElementByTagName() Selector
// Return: HTML Collection
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);

// Modify element .backgroundColor property using index
listItems[0].style.color = "crimson";

// Access Element using .querySelector()
// Return: First Element or Null
let orderedListItem = document.querySelector(".ordered-list");
console.log("Ordered List Items:", orderedListItem);
orderedListItem.style.backgroundColor = "lightgreen";

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

// Note: Mention that you can also use for loop:
// 1. getElementsByClassName()
// 2. getElementsByTagName()

// Updating Element Attributes
let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Appending New Elements
let parentElement = document.getElementById("parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

// Removing an Element
let elementToBeRemoved = document.getElementById("element-to-be-removed");
elementToBeRemoved.remove();

// Adding Event Listeners and Manipulating Element Styles
let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    let pageModeText = document.getElementById("page-mode-text");
    pageModeText.textContent = "Dark Mode";
});
```