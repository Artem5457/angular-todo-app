import {Component} from '@angular/core';
import { Todo } from "./todo-form/todo-form.component";
import {TransformTodoService} from "./transform-todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  todos: Todo[] = this.myTodos.getTodos();

  constructor(
    private myTodos: TransformTodoService
  ) { }

  ngDoCheck() {
    console.log(this.todos);
  }

  completedRemove() {
    this.myTodos.completedRemove();
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
