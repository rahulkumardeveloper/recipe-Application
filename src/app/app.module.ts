import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDeleteComponent } from './recipes/recipe-delete/recipe-delete.component';
import { RecipeService } from './recipes/recipe.service';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { ShowQrResultComponent } from './show-qr-result/show-qr-result.component';
import { QrHeaderComponent } from './qr-header/qr-header.component';
import { QrCodeModule } from 'ng-qrcode';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatTooltipModule} from '@angular/material/tooltip';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipeDeleteComponent,
    QrCodeGeneratorComponent,
    ShowQrResultComponent,
    QrHeaderComponent,
    SignupComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    QrCodeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTooltipModule

  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
