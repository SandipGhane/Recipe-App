import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
  ingredientChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomatto', 25),
  ];

  grtIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }
  addIngredients(ings: Ingredient[]) {
    // for (let ing of ings) {
    //   this.addIngredient(ing);
    // }
    this.ingredients.push(...ings);
    this.ingredientChange.emit(this.ingredients.slice());
  }
}
