import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDataService } from './services/todo-data.service';
import {AuthService} from "./services/auth.service";
import {AppFacade} from "./services/facade.service";
import {AppState} from "./services/state.service";
import {ConfigService} from "./services/config.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    ConfigService,
    TodoDataService,
    AppState,
    AppFacade,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
