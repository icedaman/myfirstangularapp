import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchInput: string): Todo[] {
    if(!searchInput){
      return todos;
    }
    return todos.filter(todo => todo.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()));
  }

}
