import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';
import { Recipe } from '../recipe-details/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, public services: ServicesService) { }
  // disable of add new recipe button
  ButtonStatus = this.services.disableButtonStatus;

  ngOnInit(): void {
    this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();// I am calling services 

  }
  //click on new recipe
  onEditRecipe() {
    this.router.navigate(['recipeEdit'], { relativeTo: this.route });
  }

}
