/**
 * Angular Imports
 **/
import {
  computed,
  inject,
  Injectable,
  Signal
} from '@angular/core';
import {
  HttpClient,
  httpResource,
  HttpResourceRef
} from '@angular/common/http';

/**
 * 3rd-party Imports
 */
import {
  Observable,
  tap
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  private _recipes?: string;
  get recipes() {
    return this._recipes;
  }

  private _recipesResource?: HttpResourceRef<string | undefined>;
  recipesAsSignal: Signal<string | undefined> = computed(() => {
    return this._recipesResource?.hasValue() ? this._recipesResource.value() : undefined;
  });

  getRecipes(ingredientsString: string): Observable<string> {
    return this.httpClient.get<string>('/api/recipes', { params: { ingredients: ingredientsString } }).pipe(
      tap(recipes => this._recipes = recipes)
    );
  }

  requestRecipesAsSignal(ingredientsString: string): void {
    this._recipesResource = httpResource<string>(() => ({
      url: '/api/recipes',
      params: { ingredients: ingredientsString }
    }));
  }
}