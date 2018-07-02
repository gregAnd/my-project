import { Injectable } from '@angular/core';
import { Todo} from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  //automatic incrementation
  lastId = 0;

  //tableau vide
  todos: Todo[] = [];

  /*recuperation de la liste des todos*/
  getTodos() {
    return this.todos;
  }

  /*Ajout d'un element a la volée*/
  createTodo(todo: Todo) {
    if(!todo.id) {
      todo.id=this.lastId++;
    }
    this.todos.push(todo);
  }

  /*Delete d'un element*/
  deleteTodo(id: number) {
    this.todos.splice(id, 1);
  }
}
