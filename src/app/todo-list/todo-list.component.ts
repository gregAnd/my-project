import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {TodoListService} from '../service/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo>;
  test: Todo = new Todo(null,true);

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todos = this.todoListService.getTodos();
  }
  createTodo() {
    this.todoListService.createTodo(this.test);
  }
  deleteTodo(key: number) {
    console.log(key);
    this.todoListService.deleteTodo(key);
  }
}
