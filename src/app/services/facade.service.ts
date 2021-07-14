import {Injectable} from "@angular/core";
import {finalize, first, tap} from "rxjs/operators";
import {TodoDataService} from "./todo-data.service";
import {AppState} from "./state.service";
import {AuthService} from "./auth.service";
import {LOCAL_STORAGE_KEYS} from "../shared/constants/local-storage-keys";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {ConfigService} from "./config.service";

@Injectable()
export class AppFacade {
  constructor(private todoDataService: TodoDataService, private state: AppState, private authService: AuthService, private configService: ConfigService, private router: Router) {
  }
  public loadTodos(): void {
    this.todoDataService.getTodos().pipe(
      first(),
      tap((todos) => {
        this.state.setTodos(todos);
      })
    ).subscribe();
  }

  public loadAuthentication(): Subject<boolean> {
    const res = new Subject<boolean>();
    this.authService.authenticate().pipe(
      first(),
      tap(isAuthed => {
        res.next(isAuthed);
        this.state.setIsAuthenticated(isAuthed);
      }),
      finalize(() => res.complete())
    ).subscribe()

    return res;
  }

  public loadConfigs() {
    const res = new Subject<boolean>();
    this.configService.fetchConfigs().pipe(
      first(),
      tap(() => {
        res.next();
      }),
      finalize(() => res.complete())
    ).subscribe()

    return res;
  }

  public login() {
    localStorage.setItem(LOCAL_STORAGE_KEYS[LOCAL_STORAGE_KEYS.authenticated], 'true');
    this.loadAuthentication().pipe(tap((isAuthed) => {
      if (isAuthed) {
        this.router.navigateByUrl('/')
      }
    })).subscribe();
  }

  public logout() {
    localStorage.setItem(LOCAL_STORAGE_KEYS[LOCAL_STORAGE_KEYS.authenticated], 'false')
    this.loadAuthentication();
    this.router.navigateByUrl('/login')
  }
}
