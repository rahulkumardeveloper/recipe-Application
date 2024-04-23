import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService {

    ingredientChanged = new EventEmitter<Ingredient[]>();
    startEditing = new EventEmitter<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('potota', 18),
        new Ingredient('tomato', 18)
    ];
    // for Edit Selection 
    getIngrient(index: number) {
        return this.ingredients[index];
    }

    getIngrients() {
        return this.ingredients.slice();
    }
    //Add ingredient
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    //Update Ingredient
    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    //Delete Ingredient
    deleteIngredient(index: number) {
        this.ingredients.splice(index,1)
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        for (let ingredient of ingredients) {
            this.addIngredient(ingredient);
        }

    }
}