import { createAction, props } from '@ngrx/store';
import { validFilters } from 'src/app/reducer.interface';
import {} from '../filter/filter.reducer';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filters: validFilters }>()
);
