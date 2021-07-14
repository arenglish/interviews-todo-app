import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Todo } from '../shared/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class AppState {
  private _todos$: BehaviorSubject<Todo[]> = new BehaviorSubject(null);
  public todos$ = this._todos$.asObservable();

  public setTodos(todos: Todo[]) {
    this._todos$.next(todos);
  }

  private _isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAuthenticated$ = this._isAuthenticated$.asObservable();

  public setIsAuthenticated(isAuthenticated: boolean) {
    this._isAuthenticated$.next(isAuthenticated);
  }
}
