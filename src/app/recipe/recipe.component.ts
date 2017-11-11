import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'recipe-Comp',
  templateUrl: 'recipe.component.html',
  // styleUrls: ['recipe.component.css']
})

export class recipeComponent {
  recipe: Recipe;
  recipeDetailCompReceiver(event){
    // console.log(event);
    this.recipe = event;
    // console.log(this.recipe);
  }

}
