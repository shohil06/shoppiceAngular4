import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-Detail-Comp',
  templateUrl: 'recipeDetail.component.html',
  styleUrls: ['recipeDetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class recipeDetailComponent {
  @Input() recipe: Recipe;
  constructor(){
  }
}
