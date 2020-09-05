import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a simple test recipe',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=1.00xw:0.755xh;0,0.0192xh&resize=980:*'
    ),
    new Recipe(
      'Test Recipe',
      'This is a simple test recipe',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=1.00xw:0.755xh;0,0.0192xh&resize=980:*'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
