const express = require('express');
const router = express.Router();
const data = require('../data');
const recipeData = data.recipes;


router.get('/', (req, res) => {
    recipeData.getAllRecipes().then((recipeList) => {
        res.json(recipeList);
    }, () => {
        res.status(500).json({error: "Could not contact server"});
    })
});

router.get('/:id', (req, res) => {
    recipeData.getRecipeById(req.params.id).then((recipe) => {
        res.json(recipe);
    }, () => {
        res.status(404).json({error: "Recipe not found!"});
    });
});

router.post('/', (req, res) => {
    let recipeInfo = req.body;
    if(!recipeInfo) {
        res.status(400).json({error: "You must provide info to create a recipe"});
        return;
    }
    if(!recipeInfo.title) {
        res.status(400).json({error: "You must provide a recipe title"});
        return;
    }
    if(!recipeInfo.ingredients) {
        res.status(400).json({error: "You must provide ingredients!"});
        return;
    }
    if(!recipeInfo.steps) {
        res.status(400).json({error: "You must provide steps for your recipe!"});
        return;
    }

    recipeData.addRecipe(
        recipeInfo.title,
        recipeInfo.ingredients,
        recipeInfo.steps,
        recipeInfo.comments)
        .then((newRecipe)=> {
                res.json(newRecipe);
                }, () => {
                    res.status(500).json({error: "Could not add recipe."});
                });
});

router.put('/:id', (req, res)=> {
    let recipeInfo = req.body;

    if(!recipeInfo) {
        res.status(400).json({error: "You must provide info to create a recipe"});
        return;
    }
    // if(!recipeInfo.title) {
    //     res.status(400).json({error: "You must provide a recipe title"});
    //     return;
    // }
    // if(!recipeInfo.ingredients) {
    //     res.status(400).json({error: "You must provide ingredients!"});
    //     return;
    // }
    // if(!recipeInfo.steps) {
    //     res.status(400).json({error: "You must provide steps for your recipe!"});
    //     return;
    // }

    let getRecipe = recipeData.getRecipeById(req.params.id).then((recip) =>{
        return recipeData.updateRecipe(req.params.id, recipeInfo)
            .then((updatedRecipe) => {
                res.json(updatedRecipe)
            }, () => {
                res.status(500).json({error: "There was an issue updating recipe"});
            });
    }).catch((err) => {
        res.status(404).json({error: "err"});
    });
});

router.delete('/:id', (req,res) => {
    let recipe = recipeData.getRecipeById(req.params.id).then(() => {
        return recipeData.removeRecipe(req.params.id)
            .then(() => {
                res.status(200).json("Recipe removed");
            }).catch(() => {
                res.status(500).json("Could not contact server");
            });
    }).catch(()=> {
        res.status(404).json({error: "Could not find recipe!"});
    });
});




module.exports = router