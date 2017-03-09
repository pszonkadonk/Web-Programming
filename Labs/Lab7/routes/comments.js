const express = require('express');
const router = express.Router();
const data = require('../data');
const commentData = data.comments;

router.get('/recipe/:recipeId', (req, res) => {
    return commentData.getRecipeComments(req.params.recipeId).then((commentData) => {
            let commentString = [];
            commentData.comments.forEach(function(comment) {
                comment.recipeTitle = commentData.recipeTitle;
                comment.recipeId = commentData.recipeId;
                commentString.push((comment));
            });
            res.json(commentString);
    }, () => {
        res.status(500).json({error: "Could not retrieve comments"});
    }).catch((err) => {
        res.status(404).json({error: err});
    });
});

router.get('/:id', (req, res) => {  
    return commentData.getCommentById(req.params.id).then((commentData) =>{
        res.json(commentData);
    }, () => {
        res.status(500).json({error: "Could not retrieve comment"});
    }).catch((err) => {
        res.status(404).json({error: err});
    });
});

router.post('/:recipeId', (req,res) => {
    let commentInfo = req.body;
    commentData.addCommentToRecipe(req.params.recipeId, commentInfo.poster, commentInfo.comment)
        .then((result) =>{
            res.json(result)
        }, (err)=> {
            res.status(500).json({error: "Was not about to submit new comment"});
        }).catch((err) => {
            res.status(404).json({error: err});
        });
});


router.put('/:recipeId/:commentId', (req, res) => {

    let commentInfo = req.body;
    if(!commentInfo) {
        res.status(400).json({error: "You must provide info to edit a comment"});
        return;
    }
    return commentData
        .updateComment(req.params.recipeId, req.params.commentId, commentInfo)
        .then((updatedComment) => {
            res.json(updatedComment)
    }, () => {
        res.status(500).json({error: "Could not make update to comment"});
    }).catch((err) => {
        res.status(400).json({error: err});
    });
});


router.delete('/:id', (req, res) => {
    return commentData.removeComment(req.params.id).then(()=> {
        res.status(200).json("Comment Removed");
    }, () => {
        res.status(500).json({error: "Could not delete comment"});
    }).catch((err)=> {
       res.status(400).json({error: err}); 
    });
});

    




module.exports = router;    