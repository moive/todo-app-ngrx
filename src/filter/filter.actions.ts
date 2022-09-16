import { createAction, props } from '@ngrx/store';
import { validFilters } from 'src/app/reducer.interface';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filters: validFilters }>()
);
