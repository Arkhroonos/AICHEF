/**
 * Angular Imports
 */
import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  FormArray
} from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatAutocomplete, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';

/**
 * 3rd-party Imports
 */
import { map, Observable, startWith, tap } from 'rxjs';


@Component({
  standalone: true,
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.scss'],
  imports: [ReactiveFormsModule, MatInput, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatFormField, MatLabel, AsyncPipe]
})
export class IngredientsFormComponent implements OnInit {
  private readonly formBuilder: NonNullableFormBuilder = inject(
    NonNullableFormBuilder
  );

  protected readonly ingredientForm = this.formBuilder.group({
    ingredients: this.formBuilder.array(
      [
        this.formBuilder.group({
          ingredient: [''],
          quantity: ['']
        })
      ]
    )
  });

  protected filteredIngredients!: Observable<string[]>;

  protected availableIngredients = ['Apple', 'Banana', 'Orange', 'Mango'];

  get ingredients() {
    return this.ingredientForm.get('ingredients') as FormArray;
  }

  ngOnInit() {
    this.filteredIngredients = this.ingredients.at(0).get('ingredient')!.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filter(value || '')),
      tap(value => console.log(value))
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.availableIngredients.filter(option => option.toLowerCase().includes(filterValue));
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
