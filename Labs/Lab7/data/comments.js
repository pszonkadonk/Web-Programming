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
    getCommentsById(id) {
        if(!id) {
            return Promise.reject("Please provide a valid comment id.");
        }

        let commentData = {};

        return recipeCollection().then((recipeCollection) =>{
            recipeCollection.find({ comments: {
                $elemMatch: {
                    _id: id
                }
            }
        }).then((recipe) => {
            if(!recipe) {
                return Promise.reject("sorry that comment does not exist");
            }
            for(let i = 0; i < recipe.comments.length; i++) {
                if(comment._id===id) {
                    commentData._id = id;
                    commentData.recipeId = recipe._id;
                    commentData.recipeTitle = recipe.title;
                    commentData.poster = comment.poster;
                    commentData.comment = comment.comment;
                    break;
                    }
                }
                return commentData;
            });
        });
    },
    getRecipeComments(id) {
        if(!id) {
            return Promise.reject("Please provide a valid recipe id.");
        }

       return recipes.getRecipeById(id).then((recipe)=>{
           let foo = recipe.comments;
           foo.recipeTitle = recipe.recipeTitle;
           foo.recipeId = recipe._id;
        //    let metaComment = {}
        //     metaComment.comments =  recipe.comments;
        //     metaComment.recipeTitle = recipe.title;
        //     metaComment.recipeId = recipe._id;

            return foo
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
                // recipeId: recipeId,
                // recipeTitle: recipeTitle
            };
            return commentCollection
                .insertOne(newCommentData)
                .then(() => { 
                // console.log(newCommentData);
                return recipeCollection().then((recipeCollection) => {                    
                    return recipeCollection.updateOne({_id: recipeId},{
                        $addToSet: {
                            comments: {
                                newCommentData
                                }
                            }
                        }).then((newCommentData) => {
                            console.log("its is done");
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
