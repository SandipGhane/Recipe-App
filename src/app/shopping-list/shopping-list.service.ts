import { Ingredient } from '../shared/ingredient.model';
// import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
export class ShoppingListService {
  ingredientChange = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomatto', 25),
  ];

  grtIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChange.next(this.ingredients.slice());
  }
  getIngredient(index) {
    return this.ingredients[index];
  }
  updateIngredient(index: number, newIngs: Ingredient) {
    this.ingredients[index] = newIngs;
    this.ingredientChange.next(this.ingredients.slice());
  }
  addIngredients(ings: Ingredient[]) {
    // for (let ing of ings) {
    //   this.addIngredient(ing);
    // }
    this.ingredients.push(...ings);
    this.ingredientChange.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChange.next(this.ingredients.slice());
  }
}
