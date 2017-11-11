import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

// App Specific Components List
  import { headerComponent } from './header/header.component';
  import { recipeComponent } from './recipe/recipe.component';
  import { recipeDetailComponent } from './recipe/recipeDetail/recipeDetail.component';
  import { recipeListComponent } from './recipe/recipeList/recipeList.component';
  import { recipeItemComponent } from './recipe/recipeList/recipeItem/recipeItem.component';
  import { shoppingListComponent } from './shoppingList/shoppingList.component';
  import { shoppingListEditComponent } from './shoppingList/shoppingListEdit/shoppingListEdit.component';
// List Ends

@NgModule({
  declarations: [
    AppComponent, headerComponent,  recipeComponent,
    recipeDetailComponent,recipeListComponent, recipeItemComponent,
    shoppingListComponent, shoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
