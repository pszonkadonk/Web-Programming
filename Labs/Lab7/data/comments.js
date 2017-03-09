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
                })
            }).then(()=> {
                return newCommentData;
            });
        });
    },
    updateComment(recipeId, commentId, updatedComment) {
        return recipeCollection().then((collection) => {
            let updateCommand = {
                $set: {}
            }
            if(!updatedComment) {
                return Promise.reject("Must provide an updated comment");
            }
            if(updatedComment.poster) {
                updateCommand.$set["comments.$.poster"] = updatedComment.poster;
            }
            if(updatedComment.comment) {
                updateCommand.$set["comments.$.comment"] = updatedComment.comment;
            }

            return collection.update({
              _id: recipeId, comments:{
                  $elemMatch: {
                      _id: commentId
                  }}}, updateCommand).then(() => {
                      return this.getCommentById(commentId);
                  });
        });
    },
    removeComment(id) {
        return recipeCollection().then((collection) => {
            return collection.findOne({ comments: {
                $elemMatch: {
                    _id: id
                }
        }
        }).then((recipe) => {
            if(!recipe) {
                return Promise.reject("Sorry that comment does not exist");
            }
            let updatedCommand = {
                $pull: {
                    comments: {
                        _id: id
                    }
                }
            };
            collection.updateOne({
                _id: recipe._id}, updatedCommand)
                });
            });
        }
    }



module.exports = exportedMethods;
