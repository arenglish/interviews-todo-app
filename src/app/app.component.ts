import { Component } from '@angular/core';
import { TodoDataService } from './services/todo-data.service';
import {AppFacade} from "./services/facade.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  constructor(private todoDataService: TodoDataService, private facade: AppFacade) {
    this.facade.loadConfigs();
    this.facade.loadAuthentication().subscribe(isAuthed => {
      if (!isAuthed) {
        this.facade.logout();
      }
    });
    console.log('AppComponent constructed!');
  }
}
