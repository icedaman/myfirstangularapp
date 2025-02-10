import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);

  todoItems: Array<Todo> = [
    {
      title: 'Groceries',
      userId: 9,
      id: 7,
      completed: false
    },
    {
      title: 'WaSH',
      userId: 9,
      id: 2,
      completed: false
    },
  ]
  
  getTodosFromApi(){
    //const url = `https://jsonplaceholder.typicode.com/todos`;
    //this.http.get<Array<Todo>>(url)
  }
}
