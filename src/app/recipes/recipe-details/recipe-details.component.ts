import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: any = Recipe;
  id!: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    // console.log("value comming", this.recipe.imagePath);
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientToList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['recipeEdit'], { relativeTo: this.route });
  }
  onDeleteRecipe() {
  // this.router.navigate(['recipeDelete'],{relativeTo:this.route});
  this.recipeService.deleteRecipe(this.id);
  this.router.navigate(['/recipe']);
  }

}
