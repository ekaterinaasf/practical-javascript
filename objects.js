//Version 3 - Objects
var myComputer = {
  operatingSystem: "Ubuntu",
  screenSize: "15 inches",
  purchaseYear: 2011
};
console.log(myComputer);
console.log(myComputer.operatingSystem);
console.log(myComputer.screenSize);
console.log(myComputer.purchaseYear);

var gordon = {
  name: "Gordon", {
    console.log(this.name);
  }
};
console.log(gordon.sayName());

//Select plunkerPreviewTarget in inspector view of browser
var todoList = {
  todos: ["item 1", "item 2", "item 3"]
};

var todoList = {
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function() {
    console.log("My todos:", this.todos);
  }
};

var todoList = {
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function() {
    console.log("My todos:", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  }
};

var todoList = {
  todos: ["item-1", "item-2", "item-3"],
  displayTodos: function() {
    console.log("My todos:", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  }
};

var todoList = {
  todos: ["item-1", "item-2", "item-3"],
  displayTodos: function() {
    console.log("My todos:", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
