const mongoCollections = require("./mongoCollections");
const uuidV4 = require('uuid/v4');
const todoItems = mongoCollections.todoItems;

let exportedMethods = {

    createTask(title, description) {
        if(!title) {
            Promise.reject("You must provide a title for the task!")
        }
        if(!description) {
            Promise.reject("You must provide a description for the task!");
        }
        if(title === "" || description === "") {
            Promise.reject("Neither your title or description can contain an empty string!");
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
                    return newInsertedInformation.insertId;
                });
        });
    },
    getAllTasks() {
        return todoItems().then((todoItemsCollection) => {
            if(Object.keys(todoItemsCollection.length === 0)) {
                Promise.reject("There are no todo items in the collection");
            })
            return todoItems
        })l
    }
}

module.exports = exportedMethods;



