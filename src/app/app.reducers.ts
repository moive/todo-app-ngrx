import { ActionReducerMap } from '@ngrx/store';
import { filterReducer } from './filter/filter.reducer';
import { AppState } from './reducer.interface';
import { todoReducer } from './todos/todo.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filters: filterReducer,
};
