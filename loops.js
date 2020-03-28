//Version 5 - Loops & Logic
var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("your todo list is empty!");
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

todoList.addTodo("an item");
todoList.addTodo("second");
todoList.toggleCompleted(1);
todoList.toggleCompleted(1);
