const mongoCollections = require("./mongoCollections");
const uuidV4 = require('uuid/v4');
const todoItems = mongoCollections.todoItems;

let exportedMethods = {

    getTask(id) {
        if(!id) {
            return Promise.reject("You must provide an id!");
        }
        return todoItems().then((todoItemCollection) => {
            return todoItemCollection.findOne({_id: id});
        })
    },
    createTask(title, description) {
        if(!title) {
            return Promise.reject("You must provide a title for the task!")
        }
        if(!description) {
            return Promise.reject("You must provide a description for the task!");
        }
        if(title === "" || description === "") {
            return Promise.reject("Neither your title or description can contain an empty string!");
        }

        return todoItems().then((todoItemCollection) => {
            let newTask = {
                _id: uuidV4(),
                title: title,
                description: description,
                completed: false,
                completedAt: null
            };
            
            return todoItemCollection
                .insertOne(newTask)
                .then((newInsertedInformation) => {
                    return newInsertedInformation.insertedId;
                })
                .then((newId) => {
                    return this.getTask(newId);
                });
        });
    },
    getAllTasks() {
        return todoItems().then((todoItemCollection) => {
            if(todoItemCollection.find().count() === 0) {
                return Promise.reject("There are no todo items in the collection");
            }
            let taskList = todoItemCollection.find().toArray();
            return taskList;
        });
    },
    completeTask(taskId) {
        if(!taskId) {
            return Promise.reject("You must provide an id for a task!");
        }
        return this.getTask(taskId)
            .then((task) => {
                let updatedTask = {
                    _id: taskId,
                    title: task.title,
                    description: task.description,
                    completed: true,
                    completedAt: new Date()
                };
                return todoItems().then((todoItemCollection) => {
                    return todoItemCollection.updateOne({
                        _id: taskId
                    }, updatedTask). then((matchingDoc) => {
                        return this.getTask(taskId);
                    });
                });
            });
    },
    removeTask(id) {
        if(!id) {
            return Promise.reject("You must prvode an id for a task");
        }

        return todoItems().then((todoItemCollection) => {
            return todoItemCollection.deleteOne({_id: id})
                .then((deletionInformation) => {
                    // console.log(deletionInformation);
                    if(deletionInformation.deletedCount === 0) {
                        return Promise.reject("Could not remove the task with that id");
                    }
                });
        });
    }
}


module.exports = exportedMethods;



