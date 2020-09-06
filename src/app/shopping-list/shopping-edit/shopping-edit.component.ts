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
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  onAddIngs(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountRef.nativeElement.value;
    const value = form.value;
    const newIngs = new Ingredient(value.name, value.amount);
    // this.ingredientAdded.emit(newIngs);
    if (this.editMode) {
      this.slService.updateIngredient(this.editItemIndex, newIngs);
    } else {
      this.slService.addIngredient(newIngs);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    console.log('clear');
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
