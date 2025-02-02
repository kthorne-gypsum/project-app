import { Subject } from 'rxjs';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
  new Ingredient('Tomatoes', 10),
];
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
   this.ingredients.push(...ingredients);
   this.ingredientsChanged.next(this.ingredients.slice());
    /* for (let ingredient of ingredients) {
       this.addIngredient(ingredient);
     }*/
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
