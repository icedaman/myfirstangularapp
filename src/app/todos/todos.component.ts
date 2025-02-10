import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { HighlightCompleteTodoDirective } from '../directives/highlight-complete-todo.directive';
import { TodoItemComponent } from "../components/todo-item/todo-item.component";

@Component({
  selector: 'app-todos',
  imports: [NgIf, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItemsArr = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }))
      .subscribe((todos) => {
        this.todoItemsArr.set(todos)
      })
  }

  updateTodos(todoItem: Todo){
    this.todoItemsArr.update(todos => {
      return todos.map(todo => {
        if(todoItem.id === todo.id){
          return {
            ...todo, 
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }
}
