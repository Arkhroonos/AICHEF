/**
 * Angular Imports
 */
import { Route } from '@angular/router';

/**
 * Internal Imports
 */
import { IngredientsFormComponent } from './ingredients-form/ingredients-form.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: IngredientsFormComponent,
    title: 'Ingredients Form',
  },
];
