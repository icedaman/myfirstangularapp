import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from "../components/todo-item/todo-item.component";
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [NgIf, TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItemsArr = signal<Array<Todo>>([]);
  searchTermInput = signal('');

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
