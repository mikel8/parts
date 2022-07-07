import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TodosDataModule } from '@parts/todos/data'
import { CheckboxComponent } from './components/checkbox/checkbox.component'
import { ControlsComponent } from './components/controls/controls.component'
import { NewTodoComponent } from './components/new-todo/new-todo.component'
import { TodoEntryComponent } from './components/todo-entry/todo-entry.component'
import { ViewTodoEntryComponent } from './components/view-todo-entry/view-todo-entry.component'
import { TodayComponent } from './containers/today/today.component'
import { TodosMainComponent } from './containers/todos-main/todos-main.component'
import { TodosRoutingModule } from './routing/todos-routing.module'
import { AutofocusDirective } from './utils/autofocus.directive'

@NgModule({
  imports: [CommonModule, TodosRoutingModule, FormsModule, TodosDataModule],
  declarations: [
    TodayComponent,
    TodosMainComponent,
    ControlsComponent,
    NewTodoComponent,
    TodoEntryComponent,
    CheckboxComponent,
    AutofocusDirective,
    ViewTodoEntryComponent,
  ],
})
export class TodosModule {}
