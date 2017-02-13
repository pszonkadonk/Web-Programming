const todoItems = require("./todo");
const connection = require("./mongoConnection");


let createdTask = todoItems.createTask("First Task", "My description is that this is my first task");

// let seeSomeTasks = createdTask.then((task) => {
//     console.log("Task has been created, now lets see what we have to do:");
//     console.log(task);
// });

let createdTask2 = todoItems.createTask("Second Task", "My description is that this is my second task");

let allTasks = todoItems.getAllTasks().then((todoListItems) => {
        todoListItems.forEach((task) => {
            console.log(task);
        });
});



