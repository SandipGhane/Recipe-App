import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 10),
  //   new Ingredient('Tomatto', 25),
  // ];
  ingredients: Ingredient[];
  private inChangeSub: Subscription;
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.grtIngredients();
    this.inChangeSub = this.slService.ingredientChange.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  // onIngredientAdded(newIngredient: Ingredient) {
  //   this.ingredients.push(newIngredient);
  // }
  ngOnDestroy() {
    this.inChangeSub.unsubscribe();
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
}
