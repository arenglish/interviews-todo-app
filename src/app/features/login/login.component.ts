import { Component } from '@angular/core';
import { AppFacade } from '../../services/facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private facade: AppFacade) {}

  authenticateButtonClicked() {
    this.facade.login();
  }
}
