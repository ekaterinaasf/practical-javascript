//Version 4 - Boolean
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log("My todos:", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(ind, newValue) {
    this.todos[ind] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(ind) {
    this.todos.splice(ind, 1);
    this.displayTodos();
  }
};
console.log(todoList.addTodo("Item 1"));
console.log(todoList.changeTodo(0, "Item 1 changed"));
console.log(todoList.deleteTodo(0));

var todoList2 = {
  todos: [],
  displayTodos: function() {
    console.log("My todos:", this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(ind, todoText) {
    this.todos[ind].todoText = todoText;
    this.displayTodos();
  },
  toggleCompleted: function(ind) {
    var todo = this.todos[ind];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
console.log(todoList2.addTodo("Item 1"));
console.log(todoList2.changeTodo(0, "Item 1 changed"));
console.log(todoList2.deleteTodo(0));
