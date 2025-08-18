/**
 * Angular Imports
 */
import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  FormArray
} from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.scss'],
  imports: [ReactiveFormsModule]
})
export class IngredientsFormComponent {
  private readonly formBuilder: NonNullableFormBuilder = inject(
    NonNullableFormBuilder
  );

  protected readonly ingredientForm = this.formBuilder.group({
    ingredients: this.formBuilder.array([
      this.formBuilder.group({
        ingredient: [''],
        quantity: ['']
      })
    ])
  });

  get ingredients() {
    return this.ingredientForm.get('ingredients') as FormArray;
  }

  protected addIngredient() {
    this.ingredients.push(
      this.formBuilder.group({
        ingredient: [''],
        quantity: ['']
      })
    );
  }

  protected removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
}
