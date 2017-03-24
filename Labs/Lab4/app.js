const todoItems = require("./todo");
const connection = require("./mongoConnection");

let firstTask = todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"); //1st task

let logFirstTask  = firstTask.then((task) => {    //log first task
    console.log("First Task");
    console.log(task);
})

let secondTask = firstTask.then(() => {
    return todoItems.createTask("lay Pokemon with Twitch TV","Should we revive Helix?");   //second task
});

let allTasks = secondTask.then(()=> {    //query all tasks
    return todoItems.getAllTasks();
});

let logTasks = allTasks.then((taskList) => {   //log all tasks
    console.log("All Tasks: \n");
    taskList.forEach((task) => {
        console.log(task);
        });
    });

let removeFirstTask = allTasks.then((taskList)=> {    //remove first task
    return todoItems.removeTask(taskList[0]._id);
});

let remainingTasks = removeFirstTask.then(() => {    //query remaining tasks
    return todoItems.getAllTasks();
});

let logRemainingTasks = remainingTasks.then((taskList) => {   //log remaining tasks
    console.log("After removing first task: \n")
    taskList.forEach((task) => {
        console.log(task);
    });
});

let completeRemainingTasks = remainingTasks.then((taskList)=> {    //complete all remainging tasks
    console.log("Completing the remaining tasks: \n");
    taskList.forEach((task) => {
        return todoItems.completeTask(task._id)
            .then((updatedTask) => {
                console.log(updatedTask);                          // log the completed remaining tasks
            });
    });
});
