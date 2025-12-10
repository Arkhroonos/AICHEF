/**
 * Angular Imports
 */
import {
  Component,
  computed,
  effect,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpResourceRef } from '@angular/common/http';

/**
 * Internal Imports
 */
import { RecipesService } from '../services/recipes.service';
import {RecipesResponse} from '../models/recipes';

@Component({
  selector: 'app-recipes-display.component',
  imports: [CommonModule],
  templateUrl: './recipes-display.component.html',
  styleUrl: './recipes-display.component.scss',
})

export class RecipesDisplayComponent {

  private recipesService: RecipesService = inject(RecipesService);
  test = effect(() =>{ console.log(this.recipesResource.value(), this.recipesResource.error())} )

  protected recipesResource: HttpResourceRef< RecipesResponse | undefined> = this.recipesService.recipesResource;

  private regex= /### \*\*\d\. (.+?)\*\* \*\*Serves:\*\* (.+?) \*\*Prep Time:\*\* (.+?) \| \*\*Cook Time:\*\* (.+?) #### \*\*Ingredients:\*\*(.+?)#### \*\*Instructions:\*\*(.+?) ---/gs;
  protected formattedRecipes = computed(() => {
    if (this.recipesResource.hasValue()){
      const recipes = this.recipesResource.value().recipes;
      const formattedRecipes = recipes.match(this.regex);
      console.log(formattedRecipes);
      if (formattedRecipes){
        return formattedRecipes.map(recipe => {
         console.log(recipe);
          return undefined;
        });
      }
    }

    return undefined;
  })
}
