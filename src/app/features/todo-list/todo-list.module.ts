import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { SampleThirdPartyComponentComponent } from './components/sample-third-party-component/sample-third-party-component.component';

@NgModule({
  declarations: [TodoListComponent, SampleThirdPartyComponentComponent, SampleThirdPartyComponentComponent],
  imports: [CommonModule],
})
export class TodoListModule {}
