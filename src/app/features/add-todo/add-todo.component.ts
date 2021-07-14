import { Component } from '@angular/core';
import { TodoDataService } from '../../services/todo-data.service';
import { TodosMock } from '../../services/todos.mock';
import { tap } from 'rxjs/operators';
import {AppFacade} from "../../services/facade.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  constructor(
    private todoDataService: TodoDataService,
    private facade: AppFacade,
  ) {}

  addTodo() {
    this.todoDataService
      .saveTodo(TodosMock[0])
      .pipe(
        tap(() => {
          this.facade.loadTodos()
        })
      )
      .subscribe();
  }
}
