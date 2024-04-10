// Select DOM elements
const todoInput = document.querySelector(".todo-input"); // Access the 'todo-input' input tag
const todoButton = document.querySelector(".todo-button"); // Access the 'todo-button' button tag
const todoList = document.querySelector(".todo-list"); // Access the 'todo-list' unordered list tag
const filterOption = document.querySelector(".filter-todo"); // Access the 'filter-todo' select tag

// Event Listeners
todoButton.addEventListener("click", addTodo); // 3. Add new task when button is clicked
document.addEventListener("DOMContentLoaded", getTodos); // 5. Load task from the localStorage when the page is loaded
todoList.addEventListener("click", deleteOrCompleteTodo); // 8. Delete or complete a task 
filterOption.addEventListener("click", filterTodo); // 10. Filter tasks based on completion

// 1. Function to save task to the localStorage / Middleware
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

// 2. Function to add a new task
function addTodo(e) {
    // Prevent form submission
    e.preventDefault();

    // Create a new todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create a new list item for the task
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    // Save the task to LocalStorage
    saveLocalTodos(todoInput.value);

    // Add classes and append the new list item to the todo div
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    // Create a button to mark the task as completed
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Create a button to delete the task
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append the todo div to the todo list
    todoList.appendChild(todoDiv);
}

// 4. Function to load task from localStorage when the page is loaded
function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };

    todos.forEach(function(todo){
        // Create to div container
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create list item for the task
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // Create complete button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        // Create delete button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        // Append todo div to the todo list
        todoList.appendChild(todoDiv);
    });
}

// 6. Function to remove the task from the localStorage
function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null ) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };

    // todo element / div container have 3 children (task, complete button, delete button)
    // children[0] = "Task content"
    const task = todo.children[0].innerText;
    const todoIndex = todos.indexOf(task);
    todos.splice(todoIndex, 1);

    localStorage.setItem("todos", JSON.stringify(todos));
}

// 7. Function to delete or complete task
function deleteOrCompleteTodo(e) {
    const item =  e.target;
    
    // If the delete button is clicked, remove the task from the list
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        console.log(todo)
        removeLocalTodos(todo);

        todo.addEventListener("transitionend", e => {
            todo.remove();
        })
    }

    // If the complete button is clicked, toggle the completed class
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

// 9. Function to filter task based on completion status
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
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
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
        }
    });
}
