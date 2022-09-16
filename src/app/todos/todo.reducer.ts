import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo';
import {
  createTodo,
  deleteTodo,
  editTodo,
  toggleAllTodo,
  toggleTodo,
} from './todo.actions';

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
  }),
  on(editTodo, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          text: text,
        };
      } else {
        return todo;
      }
    });
  }),
  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleAllTodo, (state, { isCompleted }) => {
    return state.map((todo) => ({
      ...todo,
      completed: isCompleted,
    }));
  })
);
