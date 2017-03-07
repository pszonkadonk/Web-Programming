const mongoCollections = require('../config/mongoCollections');
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((recipeCollection) => {
            return recipeCollection.find({}).toArray();
        })
    },
    getRecipeById(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({_id: id}).then((recipe) => {
                if(!recipe) {
                    return Promise.reject("No recipe found");
                }
                return recipe;
            });
        });
    },
    addRecipe(title, ingredients, steps ) {
        return recipes().then((recipeCollection) => {
            let newRecipe = {
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments: []
            };
            return recipeCollection.insertOne(newRecipe).then((newInsert) => {
                return newInsert.insertedId;
            }).then((newId)=> {
                return this.getRecipeById(newId);
            });
        });
    },
    removeRecipe(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.removeOne({_id: id}).then((deletedInfo) => {
                if(deletedInfo.deletedCount === 0) {
                    return Promise.reject(`Could not delete recipe with id ${id}`);
                }
            });
        });
    },
    updateRecipe(id, updatedRecipe) {
        return this.getRecipeById(id).then((currentRecipe) =>{
            let updatedRecipe = {
                title: updatedRecipe.title,
                ingredients: updatedRecipe.ingredients,
                steps: updateRecipe.steps
            }

            let updateCommand = {
                $set: updatedRecipe
            };

            return recipeCollection.updateOne({_id: req.id}, updateCommand).then(() => {
                return this.getRecipeById(id);
            });
        });
    }
}

module.exports = exportedMethods;