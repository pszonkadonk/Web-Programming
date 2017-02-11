const todoItems = require("./todo");
const connection = require("./mongoConnection");


let createdTask = todoItems.createTask("First Task", "My description is that this is my first task");

createdTask.then((task) => {
    console.log("Hello");
    console.log(task);
});



