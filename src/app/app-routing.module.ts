import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './features/shell/shell.component';
import { ShellModule } from './features/shell/shell.module';
import { LoginModule } from './features/login/login.module';
import { LoginComponent } from './features/login/login.component';
import {TodoListComponent} from "./features/todo-list/todo-list.component";
import {AddTodoComponent} from "./features/add-todo/add-todo.component";
import {AddTodoModule} from "./features/add-todo/add-todo.module";
import {TodoListModule} from "./features/todo-list/todo-list.module";

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: TodoListComponent,
      },
      {
        path: 'add',
        component: AddTodoComponent,
      },
    ]
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), ShellModule, LoginModule, AddTodoModule, TodoListModule],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
