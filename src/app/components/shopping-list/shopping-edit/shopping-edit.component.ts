import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from '../../models/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('f') slform: NgForm;

  editMode: boolean = false;
  editedItemIndex: number;
  editItem;
  editSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editSubscription = this.shoppingListService.startedEditing.subscribe((index) => {
      this.editedItemIndex = index;
      this.editMode = true;
      // console.log(index);
      this.editItem = this.shoppingListService.getIngredient(this.editedItemIndex);
      this.slform.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })
    })
  }

  onSubmit(form: NgForm) {
    const ingre = new Ingredients(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingre);
    } else {
      this.shoppingListService.addIngredient(ingre);
    }
    this.editMode = false;
    form.reset();
  }

  removeItem() {
    this.shoppingListService.removeIngrdient(this.editedItemIndex);
    this.clearItem();
  }

  clearItem() {
    this.slform.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }
}
