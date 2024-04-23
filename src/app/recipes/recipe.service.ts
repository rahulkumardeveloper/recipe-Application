import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe-details/recipe.model";

@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    recipeChanged=new EventEmitter<Recipe[]>();
    
    private recipes: Recipe[] = [
        new Recipe("Sauteed Vegetable Medley",
         "Refreshed vegetables, such as broccoli florets, cauliflower florets, carrot rounds, green beans, or radish",
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/10/1/FN_Sauteed-Vegetable-Medley_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568400650030.jpeg",
            [new Ingredient("carrot",20),new Ingredient("broccoli",20),new Ingredient("Beans And Radish",20)]),
        new Recipe("Indian Lentil and Egg curry recipe", 
        " this Indian vegetarian curry is loaded with lentils, spinach and creamy ..",
         "https://img.taste.com.au/iCntbupq/w720-h480-cfill-q80/taste/2019/04/indian-lentil-and-egg-curry-148613-1.jpg",
         [new Ingredient("Egg",2),new Ingredient("Water",1), new Ingredient("Masala",2)])
    ];
    constructor(private shoppingListService:ShoppingListService){}

    // get recipes after clicking
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];

    }
    addIngredientToList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.emit(this.recipes.slice());
    }

    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipeChanged.emit(this.recipes.slice());
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1)
        this.recipeChanged.emit(this.recipes.slice());
    }
}