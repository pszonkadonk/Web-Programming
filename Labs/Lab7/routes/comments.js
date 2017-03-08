const express = require('express');
const router = express.Router();
const data = require('../data');
const commentData = data.comments;

router.get('/recipe/:recipeId', (req, res) => { //this works
    return commentData.getRecipeComments(req.params.recipeId).then((commentData) => {
            let commentString = "";
            commentData.comments.forEach(function(comment) {
                commentString+=`{_id: ${comment._id}, recipeId: ${commentData.recipeId}`+
                     ` recipeTitle: ${commentData.recipeTitle}, poster: ${comment.poster} `, +
                      `comment: ${comment.comment}}\n`;
            });
                res.json(commentString);
    }, (err) => {
        res.json({error: err});
    }).catch((err) => {
        res.json({error: err});
    });
});

router.get('/:id', (req, res) => {
    return commentData.getCommentById(req.params.id).then((commentData) =>{
        console.log(commentData);
        let commentString = `{_id: ${commentData._id}, recipeId: ${commentData.recipeId}` +
                            `recipeTitle: ${commentData.recipeTitle}, poster: ${commentData.poster}, comment: ${commentData.comment}}`

        res.json(commentString);
    });
});

router.post('/:recipeId', (req,res) => {  //this works
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