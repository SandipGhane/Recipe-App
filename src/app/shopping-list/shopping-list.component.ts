import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 10),
  //   new Ingredient('Tomatto', 25),
  // ];
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.grtIngredients();
    this.slService.ingredientChange.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
  // onIngredientAdded(newIngredient: Ingredient) {
  //   this.ingredients.push(newIngredient);
  // }
}
