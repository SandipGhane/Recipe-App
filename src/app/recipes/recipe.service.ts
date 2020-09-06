import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a simple test recipe',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=1.00xw:0.755xh;0,0.0192xh&resize=980:*',
      [new Ingredient('Meat', 5), new Ingredient('French Frice', 2)]
    ),
    new Recipe(
      'ChocoLate Cake',
      'This is a Chocolate Cake  ',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fupdated_main_images%2F1110se-tr-chocolate-mint-bars-x.jpg%3Fitok%3D8FXBCWvG',
      [new Ingredient('Chocolate', 5), new Ingredient('Cherries', 20)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ing: Ingredient[]) {
    this.slService.addIngredients(ing);
  }
}
