import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { RecipeDeleteComponent } from './recipes/recipe-delete/recipe-delete.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShowQrResultComponent } from './show-qr-result/show-qr-result.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' }, 
  {
    path: 'recipe', component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'recipeEdit', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/recipeEdit', component: RecipeEditComponent },
      { path: 'recipeDelete', component: RecipeDeleteComponent },
      { path: ':id/recipeDelete', component: RecipeDeleteComponent }
    ]
  },
  { path: 'shoppingList', component: ShoppingListComponent },
  // { path: '', component: QrCodeGeneratorComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'showQrResult', component: ShowQrResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
