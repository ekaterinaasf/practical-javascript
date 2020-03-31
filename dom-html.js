// Version 7 - DOM & HTML
<html>
    <title>DOM & HTML</title>
<body>
  <h1>Todo List</h1>
        <button id="displayTodosButton">Display Todos</button>
  <button>Toggle All</button>
  <h2>Subsection title</h2>
  <h3>Subsection title</h3>
  <p>For the text</p>
<script>
var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My Todos:");
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completeTodos = 0;
    for (i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completeTodos++;
      }
    }
    if (completeTodos === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

let displayTodosButton = document.getElementById("displayTodosButton");
console.log(displayTodosButton);
displayTodosButton.addEventListener("click", function() {
  todoList.displayTodos();
});

let toggleAllButton = document.getElementById("toggleAllButton");
console.log(toggleAllButton);
toggleAllButton.addEventListener("click", function() {
  todoList.toggleAll();
});
</script>
</body>
</html>