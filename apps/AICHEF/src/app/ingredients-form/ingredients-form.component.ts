/**
 * Angular Imports
 */
import {
  Component,
  inject,
  OnInit
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  FormArray,
  Validators
} from '@angular/forms';
import {
  MatFormField,
  MatInput,
  MatLabel
} from '@angular/material/input';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption
} from '@angular/material/autocomplete';

/**
 * 3rd-party Imports
 */
import {
  map,
  Observable,
  startWith
} from 'rxjs';


@Component({
  standalone: true,
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    MatFormField,
    MatLabel,
    AsyncPipe
  ]
})
export class IngredientsFormComponent implements OnInit {
  private readonly formBuilder: NonNullableFormBuilder = inject(
    NonNullableFormBuilder
  );

  protected readonly ingredientForm = this.formBuilder.group({
    ingredients: this.formBuilder.array(
      [
        this.formBuilder.group({
          ingredient: [
            '',
            Validators.required
          ],
          quantity: [
            '',
            Validators.required
          ]
        })
      ]
    )
  });


  protected availableIngredients = [
    'Apple',
    'Banana',
    'Orange',
    'Mango'
  ];

  protected createdFilters: Observable<string[]>[] = [];

  get ingredients() {
    return this.ingredientForm.get('ingredients') as FormArray;
  }


  ngOnInit() {
    this.createdFilters.push(this.createFilter(0));
  }


  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.availableIngredients.filter(option => option.toLowerCase().includes(filterValue));
  }

  private createFilter(index: number): Observable<string[]> {
    return this.ingredients.at(index).get('ingredient')!.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filter(value || ''))
    );
  }

  protected addIngredient() {
    this.ingredients.push(
      this.formBuilder.group({
        ingredient: [
          '',
          Validators.required
        ],
        quantity: [
          '',
          Validators.required
        ]
      })
    );
    this.createdFilters.push(this.createFilter(this.ingredients.length - 1));
  }

  protected removeIngredient(index: number) {
    this.ingredients.removeAt(index);
    this.createdFilters.splice(index, 1);
  }

  protected onSubmit() {
    if (this.ingredientForm.valid) {
      console.log(this.ingredientForm.value);
    }
  }

}
