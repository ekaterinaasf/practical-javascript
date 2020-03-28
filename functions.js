var todos = ["item 1", "item 2", "item 3"];

function displayTodos() {
  console.log("My todos:", todos);
}
displayTodos();

function addTodo() {
  todos.push(todo);
  displayTodos();
}
addTodo("some stuff");

function changeTodo(ind, newValue) {
  todos[ind] = newValue;
  displayTodos();
}
changeTodo(0, "new Item 1");

function deleteTodos(ind) {
  todos.splice(ind, 1);
  displayTodos();
}
deleteTodos(0);
