import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Todo} from '../todo-form/todo-form.component';
// import {TransformListService} from '../transform-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TodoListComponent {
  @Input() todos!: Todo[];
  allTodosStatus: boolean = false;

  constructor(
    // private myTodos: TransformListService,
  ) { }

  toggleAllTodos() {
    this.allTodosStatus = !this.allTodosStatus;
    this.todos = this.todos.map(item => {
      return {
        ...item,
        completed: this.allTodosStatus
      }
    });
  }

  updateTodos(todo: Todo) {
    this.todos = this.todos.filter(item => item.id !== todo.id);
  }

  // Проверить действие этого подхода в работе
  // trackByAoiId(idx: number, product: any): number {
  //   // console.log('product', product);
  //   // console.log('id', idx);
  //   return product.id;
  // }

  changeStatus(todo: Todo) {
    this.todos = this.todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }

      return item;
    })
  }
}
