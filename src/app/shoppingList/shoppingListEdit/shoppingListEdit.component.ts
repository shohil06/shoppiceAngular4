import { Component, Input,
  ViewChild, ElementRef,
  EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component ({
  selector: 'shopping-List-Edit-Comp',
  templateUrl: 'shoppingListEdit.component.html',
  // styleUrls: ['shoppingListEdit.component.css']
})

export class shoppingListEditComponent {
  @Input() shopItem = {
    "name":"",
    "amount":""
  }

  @ViewChild('nameInput') nameInputValue: ElementRef;
  @ViewChild('amountInput') amountInputValue: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  addItem(event){
    // console.log(event);
    // console.log(this.nameInputValue.nativeElement.value)
    const ingName = this.nameInputValue.nativeElement.value;
    const ingAmount = this.amountInputValue.nativeElement.value;
    const ingItem = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(ingItem);
  }
  deleteItem(){

  }
  clearInput(event){
    this.shopItem.name="";
    this.shopItem.amount="";
    console.log(event);
  }
}
