import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from "../todo-form/todo-form.component";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() onRemove: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() onChange: EventEmitter<Todo> = new EventEmitter<Todo>();
  editMode: boolean = false;
  editTitle: string = this.todo === undefined ? '' : this.todo.title;
  // newState: Todo[] = this.myTodos.todos; // Проверить подобные моменты на возможность проделывания операции с map без создания новой переменной

  constructor(
  ) { }

  ngOnInit(): void {
  }

  changeMode() {
    this.editMode = true;
  }

  // Спросить про правильную реализацию
  handleTodoEdit(todo: Todo, editTitle: string) {
    this.todo = {
      ...todo,
      title: editTitle
    }
  }

  onKeyUp(event: KeyboardEvent) {
    if (this.editTitle.length > 0 && event.keyCode === 13) {
      this.handleTodoEdit(this.todo, this.editTitle);
      this.editMode = false;
    } else if (event.keyCode === 27) {
      this.editMode = false;
    }
  }

  removeTodo(todo: Todo) {
    this.onRemove.emit(todo);
  }

  completeChange(todo: Todo) {
    // this.todo = {
    //   ...todo,
    //   completed: !todo.completed
    // }

    this.onChange.emit(todo);
  }
}
