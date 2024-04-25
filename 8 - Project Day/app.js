// Select DOM elements
const todoInput = document.querySelector(".todo-input"); // Input field for adding new tasks
const todoButton = document.querySelector(".todo-button"); // Button to add new tasks
const todoList = document.querySelector(".todo-list"); // UL element to display tasks
const filterOption = document.querySelector(".filter-todo"); // Dropdown for filtering tasks

// Event Listeners
todoButton.addEventListener("click", addTodo); // 3. Add new task when the button is clicked
document.addEventListener("DOMContentLoaded", getTodos); // 5. Load tasks from localStorage when the page is loaded
todoList.addEventListener("click", deleteTodo); // 8. Delete or complete a task when clicked
filterOption.addEventListener("click", filterTodo); //10. Filter tasks based on completion status

// 1. Function to save tasks to localStorage
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


// 2.Function to add a new task
function addTodo(e) {
    // Prevent form submission
    e.preventDefault();

    // Save the task to localStorage
    saveLocalTodos(todoInput.value);
  
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


// 4. Function to load tasks from localStorage when the page is loaded
function getTodos() {// Function to filter tasks based on completion status

    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
      // Create todo div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
  
      // Create list item for the task
      const newTodo = document.createElement("li");
      newTodo.classList.add("todo-item");
      newTodo.innerText = todo;
      todoDiv.appendChild(newTodo);
  
      // Create complete button
      const completedButton = document.createElement("button");
      completedButton.classList.add("complete-btn");
      completedButton.innerHTML = `<i class="fas fa-check"></i>`;
      todoDiv.appendChild(completedButton);
  
      // Create delete button
      const trashButton = document.createElement("button");
      trashButton.classList.add("trash-btn");
      trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
      todoDiv.appendChild(trashButton);
  
      // Append todo div to the todo list
      todoList.appendChild(todoDiv);
    });
  }



// 6. Function to remove tasks from localStorage
function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

// 7. Function to delete or complete a task
function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    // If the delete button is clicked, remove the task from the list
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", e => {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    // If the complete button is clicked, toggle the completed class
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}


// 9. Function to filter tasks based on completion status
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
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
      }
    });
  }
