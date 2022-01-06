import { Injectable } from '@angular/core';
import { Todo } from "./todo-form/todo-form.component";

@Injectable({
  providedIn: 'root'
})

export class TransformListService {
  todos: Todo[] = [];

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(el => el.id !== todo.id);
  }

  clearTodoList() {
    this.todos = [];
  }
}
