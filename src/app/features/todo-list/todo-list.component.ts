import {Component, ViewEncapsulation} from '@angular/core';
import {AppState} from '../../services/state.service';
import {Todo, TODO_PRIORITY} from '../../shared/models/todo.model';
import {AppFacade} from '../../services/facade.service';
import {isArray, map as lodashMap} from 'lodash';
import {switchMap, tap} from "rxjs/operators";
import {forkJoin} from "rxjs";
import {TodoDataService} from "../../services/todo-data.service";

interface TodoDisplay extends Todo {
  priorityDisplay: string;
  dateDisplay: string;
}

const PriorityDisplayMap: Record<TODO_PRIORITY, string> = {
  [TODO_PRIORITY.P3]: 'On the backburner',
  [TODO_PRIORITY.P2]: 'Maybe tomorrow?',
  [TODO_PRIORITY.P1]: 'Today',
};

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todosTransformedForDisplay: TodoDisplay[];
  todosFound: boolean = false;

  constructor(private facade: AppFacade, private state: AppState, private todoDataService: TodoDataService) {
    this.facade.loadTodos();
    this.state.todos$.subscribe((todos) => {
      // if todos is not an array, assume the data is not initialized yet
      this.todosFound = isArray(todos);
      this.todosTransformedForDisplay = lodashMap(todos, (todo) =>
        this.transformTodoToDisplay(todo)
      );
    });
  }

  private transformTodoToDisplay(todo: Todo): TodoDisplay {
    return {
      ...todo,
      priorityDisplay: PriorityDisplayMap[todo.priority],
      dateDisplay: `${
        monthNames[new Date(todo.dateCreated).getMonth()]
      } ${new Date(todo.dateCreated).getDate()}`,
    };
  }

  clearTodos() {
    this.state.todos$
      .pipe(
        switchMap((todos) =>
          forkJoin(
            ...lodashMap(todos, (todo) => this.todoDataService.deleteTodo(todo.id))
          )
        ),
        tap(() => this.facade.loadTodos())
      )
      .subscribe();
  }
}
