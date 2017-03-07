const express = require('express');
const router = express.Router();
const data = require('../data');
const commentData = data.comments;

router.get('/recipe/:recipeId', (req, res) => {
    return commentData.getRecipeComments(req.params.id).then((recipe) => {
            let commentString = "";
            recipe.comments.forEach(function(comment) {
                commentString+=`{_id: ${comment._id}, recipeId: ${recipe._id}`+
                     `recipeTitle: ${recipe.title}, poster: ${comment.poster}`, +
                      `comment: ${comment.comment}\n`;
        });
            res.json(commentString);
    });
});

router.get('/:id', (req, res) => {
    return commentData.getCommentById(req.params.id).then((comment) =>{
        res.json(`{_id: ${comment._id}, recipeId: ${comment.recipeId}` +
        `recipeTitle: ${comment.recipeTitle}, poster: ${comment.poster}, comment: ${comment.comment}`);
    });
});

router.post('/:recipeId', (req,res) => {
    let commentInfo = req.body;
    console.log(req.params.recipeId)
    console.log(commentInfo);
    commentData.addCommentToRecipe(req.params.recipeId, commentInfo.poster, commentInfo.comment)
        .then((newComment) =>{
            res.json(newComment)
        }, (err)=> {
            res.status(500).json({error: "This got caught in reject of then"});
        }).catch((err) => {
            res.json({error: err});
        });
});
    




module.exports = router;