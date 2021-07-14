import { Component } from '@angular/core';
import {AppFacade} from "../../services/facade.service";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  constructor(private facade: AppFacade) {}

  logoutButtonClicked() {
    this.facade.logout();
  }
}
