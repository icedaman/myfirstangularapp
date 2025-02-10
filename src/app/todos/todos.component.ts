import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItemsArr = signal<Array<Todo>>([])

  ngOnInit(): void {
    console.log(this.todoService.todoItems)
    this.todoItemsArr.set(this.todoService.todoItems)
  }
}
