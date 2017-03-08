const mongoCollections = require('../config/mongoCollections');
const comments = mongoCollections.comments;
const recipeCollection = mongoCollections.recipes;
const recipes = require('./recipes');
const uuid = require('node-uuid');


let exportedMethods = {

    getAllComments() {
        return comments().then((commentsCollection) => {
            return commentsCollection.find({}).toArray();
        });
    },
    // getCommentById(id) {
    //     if(!id) {
    //         return Promise.reject("Please provide a valid comment id.");
    //     }
    //     return comments().then((commentsCollection) => {
    //         return commentsCollection.find({_id: id}).toArray();
    //     });
    getCommentById(id) {
        if(!id) {
            return Promise.reject("Please provide a valid comment id.");
        }

        let commentData = {};

        return recipeCollection().then((collection)=>{
            return collection.findOne({ comments: {
                $elemMatch: {
                    _id: id
                }
            }
        }).then((recipe) => {
            if(!recipe) {
                return Promise.reject("sorry that comment does not exist");
            }

            let targetComment = recipe.comments.filter((comment) => {
                return comment._id === id;
            });

           let metaData = targetComment[0];
           metaData.recipeId = recipe._id;
           metaData.recipeTitle = recipe.title;
           return metaData;

            });
        });
    },
    getRecipeComments(id) {
        if(!id) {
            return Promise.reject("Please provide a valid recipe id.");
        }

       return recipes.getRecipeById(id).then((recipe)=>{
           let metaData = {};
           metaData.comments = recipe.comments;
           metaData.recipeTitle = recipe.title;
           metaData.recipeId = recipe._id;
           return metaData;
        });
    },
    addCommentToRecipe(recipeId, poster, comment) {
        if(!recipeId) {
            return Promise.reject("Please provide a valid recipe id");
        }
        if(!poster) {
            return Promise.reject("Please provide a poster name");
        }
        if(!comment) {
            return Promise.reject("Please provide a comment");
        }


        return comments().then((commentCollection) => {

            let newCommentData = {
                _id: uuid.v4(),
                poster: poster,
                comment: comment
            };

            let updatedCommand = {
                $addToSet: {comments: newCommentData}
            }
            
            return commentCollection
                .insertOne(newCommentData)
                .then(() => { 
                return recipeCollection().then((recipeCollection) => {                    
                    return recipeCollection.updateOne({_id: recipeId},updatedCommand)
                        .then((newCommentData) => {
                            return newCommentData;
                        });
                    })
                });
            });
        },
        removeComment(id) {
            return comments().then((commentsCollection) => {
                return commentsCollection.removeOne({_id: id})
                    .then((deletedCommentInfo) => {
                        if(deletedCommentInfo.deletedCount === 0) {
                            throw("Comment with that id could not be found")
                        }
                    });
            });
        }
}



module.exports = exportedMethods;
