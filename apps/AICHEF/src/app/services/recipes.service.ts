/**
 * Angular Imports
 **/
import {
  computed,
  Injectable,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';
import {
  httpResource,
  HttpResourceRef
} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RecipesService {

  private _recipes?: string;
  get recipes() {
    return this._recipes;
  }

  private _ingredients: WritableSignal<string | null> = signal(null);

  private _recipesResource: HttpResourceRef<string | undefined> = httpResource<string>(() => {
    const ingredients = this._ingredients();
    if (ingredients === null) {
      return undefined;
    }

    return {
      url: '/api/recipes',
      params: { ingredients }
    };
  });

  recipesAsSignal: Signal<string | undefined> = computed(() => {

    return this._recipesResource.hasValue()
      ? this._recipesResource.value()
      : undefined;
  });

  requestRecipesAsSignal(ingredientsString: string): void {
    this._ingredients.set(ingredientsString);
  }
}
