//Version 6 - Thinking in code
var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty");
    } else {
      console.log("My todos:", this.todos);
      for (i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText);
        if (this.todos[i].completed === true) {
          console.log("( x )", this.todos[i].todoText);
        } else {
          console.log("(  )", this.todos[i].todoText);
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

todoList.addTodo("first");
todoList.addTodo("second");
todoList.addTodo("third");
todoList.toggleAll();
todoList.toggleAll();
todoList.toggleCompleted(1);
todoList.toggleAll();
