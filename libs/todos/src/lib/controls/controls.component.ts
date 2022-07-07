import { Component } from '@angular/core'
import { TodosMainUiStateService } from '../todos-main/todos-main-ui-state.service'

@Component({
  selector: 'parts-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
  constructor(private uiState: TodosMainUiStateService) {}

  addNew() {
    this.uiState.setAddingNew(true)
  }
}
