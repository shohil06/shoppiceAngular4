import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'recipe-Item-Comp',
  templateUrl: 'recipeItem.component.html',
  // styleUrls: ['recipeItem.component.css']
})

export class recipeItemComponent {

  @Output() recipeItemEmit = new EventEmitter<{name: string, description: string, imagePath: string}>();

  // Binded in recipeList.component.html
    @Input() recipe: Recipe;

    onClickRecipeItem(event){
      // console.log(event);
      this.recipeItemEmit.emit({
        name: event.name,
        description: event.description,
        imagePath: event.imagePath
      })
    }
}
