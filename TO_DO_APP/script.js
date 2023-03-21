const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

let todos = [];

addTodoBtn.addEventListener("click", () => {
	const todoText = todoInput.value.trim();
	if (todoText !== "") {
		const todo = { id: Date.now(), text: todoText, completed: false };

!
todos.push(todo);
renderTodos();
todoInput.value = "";
}
});

todoList.addEventListener("click", (event) => {
if (event.target.tagName.toLowerCase() === "input") {
const todoId = parseInt(event.target.dataset.id);
const todoIndex = todos.findIndex((todo) => todo.id === todoId);
todos[todoIndex].completed = !todos[todoIndex].completed;
renderTodos();
}
});

function renderTodos() {
todoList.innerHTML = "";
todos.forEach((todo) => {
const todoItem = document.createElement("li");
todoItem.innerHTML = `<input type="checkbox" data-id="${todo.id}" ${todo.completed ? "checked" : ""}> <label ${todo.completed ? 'style="text-decoration: line-through;"' : ""}>${todo.text}</label> <button class="delete-todo-btn" data-id="${todo.id}"><i class="fas fa-trash"></i></button>` ;
todoList.appendChild(todoItem);
});

const deleteTodoBtns = document.querySelectorAll(".delete-todo-btn");
deleteTodoBtns.forEach((deleteBtn) => {
deleteBtn.addEventListener("click", (event) => {
const todoId = parseInt(event.target.dataset.id);
const todoIndex = todos.findIndex((todo) => todo.id === todoId);
todos.splice(todoIndex, 1);
renderTodos();
});
});
}