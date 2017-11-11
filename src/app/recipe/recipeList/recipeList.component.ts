import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-List-Comp',
  templateUrl: 'recipeList.component.html',
  // styleUrls: ['recipeList.component.css']
})

export class recipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Fast Food','This is simply a Description','http://www.indianfoodforever.com/images/rainy-recipes.jpg'),
    new Recipe('Gravy','This is simply a Description 1','https://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg'),
    new Recipe('Veg Momos','This is simply a Description 2','http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg'),
    // new Recipe('A Test Recipe','This is simply a Description','http://www.indianfoodforever.com/images/rainy-recipes.jpg'),
    // new Recipe('A Test Recipe','This is simply a Description','http://www.indianfoodforever.com/images/rainy-recipes.jpg'),
    // new Recipe('A Test Recipe','This is simply a Description','http://www.indianfoodforever.com/images/rainy-recipes.jpg')
  ];

  @Output() recipeToRecipeDetail = new EventEmitter<{name: string, description: string, imagePath: string}>()
  recipeDetailReceiver(event){
    // console.log(event);
    this.recipeToRecipeDetail.emit({
      name: event.name,
      description: event.description,
      imagePath: event.imagePath
    });
  }
}
