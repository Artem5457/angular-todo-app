import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../todo-form/todo-form.component";

@Component({
  selector: 'app-todos-filter',
  templateUrl: './todos-filter.component.html',
  styleUrls: ['./todos-filter.component.css']
})
export class TodosFilterComponent implements OnInit {
  @Input() todos!: Todo[];
  filter: string = 'all'

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onFilterChange(value: string) {
    this.filter = value;

    this.todos = this.filter === 'all'
      ? this.todos
      : this.todos.filter(item => {
        if (this.filter === 'active') {
          return !item.completed;
        }

        return item.completed;
      });
  }

}
