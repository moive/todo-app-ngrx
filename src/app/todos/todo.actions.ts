import { createAction, props } from '@ngrx/store';
export const createTodo = createAction(
  '[TODO] Create todo',
  props<{ text: string }>()
);

export const toggleTodo = createAction(
  '[TODO] toggle',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TODO] edit',
  props<{ id: number; text: string }>()
);

export const deleteTodo = createAction(
  '[TODO] delete',
  props<{ id: number }>()
);

export const toggleAllTodo = createAction(
  '[TODO] toggleAll',
  props<{ isCompleted: boolean }>()
);
