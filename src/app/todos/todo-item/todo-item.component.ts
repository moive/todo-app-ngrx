import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducer.interface';
import { Todo } from '../models/todo';
import { deleteTodo, editTodo, toggleTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo('');
  @ViewChild('editRef') txtInputEdit!: ElementRef;
  chkCompleted!: FormControl;
  txtInput!: FormControl;

  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe((value) => {
      console.log(value);
      this.store.dispatch(toggleTodo({ id: this.todo.id }));
    });
  }

  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.txtInputEdit.nativeElement.select();
    }, 1);
  }

  finishedEditing() {
    this.editing = false;

    if (this.txtInput.invalid) return;
    if (this.txtInput.value == this.todo.text) return;
    this.store.dispatch(
      editTodo({ id: this.todo.id, text: this.txtInput.value })
    );
  }

  delete() {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }
}
