import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo';
import { createTodo } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Saving to world'),
  new Todo('testing'),
];

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text }) => [...state, new Todo(text)])
);
