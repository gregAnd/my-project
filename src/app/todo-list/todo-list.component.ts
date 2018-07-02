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
  newTodo: Todo = new Todo();

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todos = this.todoListService.getTodos();
  }
  createTodo() {
    this.todoListService.createTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  deleteTodo(id: number) {
    console.log(id);
    this.todoListService.deleteTodo(id);
  }
}
