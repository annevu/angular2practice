import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  //Instead of injecting the TodoDataService in our new TodoListHeaderComponent
  // to save the new todo, 
  //we emit an add event and pass the new todo as an argument.
  newTodo : Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addTodo(){
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
