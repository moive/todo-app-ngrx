import { createReducer, on } from '@ngrx/store';
import { validFilters } from 'src/app/reducer.interface';
import { setFilter } from './filter.actions';

export const initialState: validFilters = 'all' as validFilters;

export const filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filters }) => filters)
);
