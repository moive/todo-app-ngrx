import { Todo } from './todos/models/todo';

export type validFilters = 'all' | 'completed' | 'pending' | 'none';

export interface AppState {
  todos: Todo[];
  filters: validFilters;
}
