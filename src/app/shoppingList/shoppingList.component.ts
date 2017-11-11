import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component ({
  selector: 'shopping-List-Comp',
  templateUrl: 'shoppingList.component.html',
  // styleUrls: ['shoppingList.component.css']
})

export class shoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  onIngredientAdded(event: Ingredient){
    // console.log(event);
    this.ingredients.push(event);
  }
}
