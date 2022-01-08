import { Injectable } from '@angular/core';
import { Todo } from './todo-form/todo-form.component';

@Injectable({
  providedIn: 'root'
})
export class TransformTodoService {
  todos: Todo[] = [];

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(item => item.id === todo.id);
  }

  completedRemove() {
    this.todos = this.todos.filter(item => !item.completed);
  }
}
