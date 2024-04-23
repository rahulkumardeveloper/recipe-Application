import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f', { static: false }) slForm!: NgForm;
  editMode = false;
  editedItemIndex: number = 0;
  editedItem!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.startEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngrient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }
  //clicking Add button for Add recipe
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    //foe updating Data
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
      this.slForm.reset();//reset form
    }
    else {
      // below I am using service for call addingredient
      this.shoppingListService.addIngredient(newIngredient);
      this.slForm.reset();//reset form
    }
    this.editMode = false;

  }
  //click on delete Ingredient
  onDeleteItem() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClearItem();

  }
  //cleck on clear button 
  onClearItem() {
    this.slForm.reset();
    this.editMode=false;
  }
}
