import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import {TransformListService} from "../transform-list.service";

export interface Todo {
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  inputValue!: string;
  newId!: number;
  newTodo!: Todo;

  constructor(
    private myLocalStorage: LocalStorageService,
    private myTodos: TransformListService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.inputValue.length > 0) {
      this.newId = +new Date();
      this.newTodo = {
        id: this.newId,
        title: this.inputValue,
        completed: false
      }
    }

    this.myTodos.addTodo(this.newTodo);
    this.myLocalStorage.setLocalStorage('todos', this.myTodos.todos);

    this.inputValue = "";
  }

}
