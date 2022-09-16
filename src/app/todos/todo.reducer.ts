import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo';
import { createTodo, toggleTodo } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Saving to world'),
  new Todo('testing'),
];

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(toggleTodo, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  })
);
