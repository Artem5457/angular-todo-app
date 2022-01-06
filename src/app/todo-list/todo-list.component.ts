import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Todo } from '../todo-form/todo-form.component';
import { TransformListService } from '../transform-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  allTodosStatus: boolean = false;
  toggledAllState!: Todo[];

  constructor(
    private myTodos: TransformListService,
    private myLocalStorage: LocalStorageService
  ) { }

  toggleAllTodos() {
    this.allTodosStatus = !this.allTodosStatus;
    this.toggledAllState = this.myTodos.todos.map(item => {
      return {
        ...item,
        completed: this.allTodosStatus
      }
    });

    this.myLocalStorage.setLocalStorage('todos', this.toggledAllState);
  }

}
