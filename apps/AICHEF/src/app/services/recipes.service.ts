/**
 * Angular Imports
 **/
import {
  Injectable,
  signal,
  WritableSignal
} from '@angular/core';
import {
  httpResource,
  HttpResourceRef
} from '@angular/common/http';

/**
 * Internal Imports
 */
import { RecipesResponse } from '../models/recipes';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private _ingredients: WritableSignal<string | null> = signal(null);

  private _recipesResource: HttpResourceRef<RecipesResponse | undefined> = httpResource<RecipesResponse>(() => {
    const ingredients = this._ingredients();
    if (ingredients === null) {
      return undefined;
    }

    return {
      url: '/api/recipes',
      params: { ingredients }
    };
  });

  get recipesResource() {
    return this._recipesResource;
  }

  requestRecipesAsSignal(ingredientsString: string): void {
    this._ingredients.set(ingredientsString);
  }
}
