import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
  @Output() onAdd: EventEmitter<Todo> = new EventEmitter<Todo>();
  inputValue: string = '';
  newId!: number;
  newTodo!: Todo;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.inputValue.length > 0) {
      this.newId = +new Date();
      this.newTodo = {
        id: this.newId,
        title: this.inputValue,
        completed: false
      }
    }

    this.onAdd.emit(this.newTodo);

    this.inputValue = "";
  }

}
