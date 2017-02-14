const todoItems = require("./todo");
const connection = require("./mongoConnection");


// let createdTask = todoItems.createTask("First Task", "My description is that this is my first task");

// let seeSomeTasks = createdTask.then((task) => {
//     console.log("Task has been created, now lets see what we have to do:");
//     console.log(task);
// });

// let createdTask2 = todoItems.createTask("Second Task", "My description is that this is my second task");

// let allTasks = todoItems.getAllTasks().then((todoListItems) => {
//         todoListItems.forEach((task) => {
//             console.log(task);
//         });
// });



// let taskGotten = todoItems.getTask("72d0e352-f5b0-4dff-997c-d9007733b874");

// let before =  taskGotten.then((task) => {
//     console.log("BEFORE: ");
//     console.log(task);
// })

// let finishedtask = taskGotten.then((task) => {
//     return todoItems.completeTask(task._id);
// })

// let finallyTaskDone = finishedtask.then((task) => {
//     console.log("AFTER: ");
//     console.log(task);
// })

let removeTask = todoItems.removeTask("72d0e352-f5b0-4dff-997c-d9007733b874");

let tryToGetTask = removeTask.then(() => {
    return todoItems.getTask("72d0e352-f5b0-4dff-997c-d9007733b874");
});

tryToGetTask.catch((error) => {
    // Should error out
    console.error(error);
})
