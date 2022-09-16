import { createAction, props } from '@ngrx/store';
export const createTodo = createAction(
  '[TODO] Create todo',
  props<{ text: string }>()
);

export const toggleTodo = createAction(
  '[TODO] toggle',
  props<{ id: number }>()
);
