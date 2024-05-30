```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Manipulation</title>
    <style>
      h3 {
        margin-bottom: 0px;
      }

      #style {
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
      <h3>Adding Event Listener</h3>
      <div>
        <div id="button-div">Click the button below!</div>
        <button id="button">Click me!</button>
      </div>
    </div>

    <div>
      <h3>Appending New Elements</h3>
      <div>
        <div id="append">Existing content</div>
      </div>
    </div>

    <div>
      <h3>Removing Elements</h3>
      <div id="remove">
        <div>Element to be removed</div>
      </div>
    </div>

    <div>
      <h3>Updating Element Attributes</h3>
      <div>
        <img
          id="image"
          style="height: 50px"
          src="https://cdn-icons-png.flaticon.com/512/624/624106.png"
          alt="Original Image"
        />
      </div>
    </div>

    <div>
      <h3>Manipulating Element Styles</h3>
      <div id="style">
        <div id="mode">Light Mode</div>
        <div>Welcome to my profile</div>
      </div>
    </div>

    <script src="app.js"></script>
  </body>
</html>
```

```js
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
elementToBeRemoved.remove();

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
```
