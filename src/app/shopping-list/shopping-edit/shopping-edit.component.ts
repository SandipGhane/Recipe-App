import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  // EventEmitter,
  // Output,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}
  onAddIngs() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngs = new Ingredient(ingName, ingAmount);
    // this.ingredientAdded.emit(newIngs);
    this.slService.addIngredient(newIngs);
  }
}
