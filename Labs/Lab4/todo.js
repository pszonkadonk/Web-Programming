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
    }
}

module.exports = exportedMethods;



