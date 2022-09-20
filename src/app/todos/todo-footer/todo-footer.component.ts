import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setFilter } from 'src/app/filter/filter.actions';
import { AppState, validFilters } from 'src/app/reducer.interface';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  filterNow: validFilters = 'all';
  allFilters: validFilters[] = ['all', 'completed', 'pending'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('filters').subscribe((fil) => (this.filterNow = fil));
    console.log(this.filterNow);
  }

  changeFilter(item: validFilters) {
    this.store.dispatch(setFilter({ filters: item }));
  }
}
