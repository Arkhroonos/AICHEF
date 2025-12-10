/**
 * Angular Imports
 */
import { Route } from '@angular/router';

/**
 * Internal Imports
 */
import { IngredientsFormComponent } from './ingredients-form/ingredients-form.component';
import { RecipesDisplayComponent } from './recipes-display/recipes-display.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: IngredientsFormComponent,
    title: 'Ingredients Form'
  },
  {
    path: 'recipes',
    component: RecipesDisplayComponent,
    title: 'Display recipes'
  }
];
