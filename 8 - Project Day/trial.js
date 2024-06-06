// Select DOM elements
const todoInput = document.querySelector(".todo-input"); // Input field for adding new tasks
const todoButton = document.querySelector(".todo-button"); // Button to add new tasks
const todoList = document.querySelector(".todo-list"); // UL element to display tasks
const filterOption = document.querySelector(".filter-todo"); // Dropdown for filtering tasks

// Create event listeners for each button.
todoButton.addEventListener("click", addTodo); // Step 2: Add new task when the button is clicked
document.addEventListener("DOMContentLoaded", getTodos); // Step 5: Load tasks from localStorage when the page is loaded
todoList.addEventListener("click", deleteOrCompleteTodo); // Step 7: Delete or complete a task
filterOption.addEventListener("change", filterTodo); // Step 10: Filter tasks based on completion status

// Step 1: Function to add a new task
function addTodo(e) {
  // Prevent form submission
  e.preventDefault();

  // ****** DO NOT ADD THIS YET ******
  // Save the task to localStorage
  saveLocalTodos(todoInput.value);
  // *********************************

  // Create a new todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create a new list item for the task
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  // Create a button to mark the task as completed
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completedButton);

  // Create a button to delete the task
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);

  // Append the todo div to the todo list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

/*
    How to access the local storage
    1. Right click the browser
    2. Inpect Element
    3. Application Tab
    4. Storage
    5. Local Storage
*/

// Step 3: Function to save tasks to localStorage
// Middleware - a web server is middleware that connects websites to the backend database.
// Metaphor: You should buy the ingredients first before you start to cook the dish.

// The argument that is passed to the todo parameter is the actual textual data.
function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

/*
  // ****** Add this to the addTodo() ******

  // Save the task to localStorage
  saveLocalTodos(todoInput.value);
*/

// Step 4: Function to load tasks from localStorage when the page is loaded
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    // Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create list item for the task
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todo;
    todoDiv.appendChild(newTodo);

    // Create a button to mark the task as completed
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completedButton);

    // Create a button to delete the task
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashButton);

    // Append todo div to the todo list
    todoList.appendChild(todoDiv);
  });
}

/*  
    // ****** Add this to the Event Listener Section ******
    
    document.addEventListener("DOMContentLoaded", getTodos); // Step 5: Load tasks from localStorage when the page is loaded
*/

// Step 6: Function to delete or complete task
function deleteOrCompleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");

    // ****** DO NOT ADD THIS YET ******
    // Delete the task from localStorage
    removeLocalTodos(todo);
    // *********************************

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // If the complete button is clicked, toggle the completed class
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// Step 8: Function to remove the task from the localStorage
// The argument that will be passed to the todo parameter is the todoDiv container.
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  // todo element / div container have 3 children (task, complete button, delete button)
  // children[0] = "Task content"
  const task = todo.children[0].innerText;
  const todoIndex = todos.indexOf(task);
  todos.splice(todoIndex, 1);

  localStorage.setItem("todos", JSON.stringify(todos));
}

/*  
    // ****** Add this to the deleteOrCompleteTodo() ******

    // Remove task from localStorage
    removeLocalTodos(todo);
*/

// Step 9: Function to filter task based on completion status
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
