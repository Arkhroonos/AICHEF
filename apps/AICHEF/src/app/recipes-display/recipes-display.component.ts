/**
 * Angular Imports
 */
import {
  Component,
  computed,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpResourceRef } from '@angular/common/http';

/**
 * Internal Imports
 */
import { RecipesService } from '../services/recipes.service';
import { RecipesResponse, Recipe, RecipesApiResponse } from '../models/recipes';

@Component({
  selector: 'app-recipes-display.component',
  imports: [CommonModule],
  templateUrl: './recipes-display.component.html',
  styleUrl: './recipes-display.component.scss',
})

export class RecipesDisplayComponent {

  private recipesService: RecipesService = inject(RecipesService);

  protected recipesResource: HttpResourceRef<RecipesResponse | undefined> = this.recipesService.recipesResource;

  protected recipes = computed<Recipe[] | null>(() => {
    if (!this.recipesResource.hasValue()) {
      return null;
    }

    try {
      const response = this.recipesResource.value();
      if (!response?.recipes) {
        return null;
      }


      let recipesString = response.recipes;


      recipesString = recipesString
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '');

      // Parse the JSON
      const parsedData: RecipesApiResponse = JSON.parse(recipesString);

      return parsedData.recipes || [];
    } catch (error) {
      console.error('Error parsing recipes:', error);
      console.error('Raw response:', this.recipesResource.value());
      return null;
    }
  });
}
