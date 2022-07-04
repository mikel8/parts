import { fakeAsync, tick, waitForAsync } from '@angular/core/testing'
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/jest'
import { mockObservable } from '@parts/test-helpers'
import { TodosFacadeService } from '@parts/todos/data'
import { RxState } from '@rx-angular/state'
import { NewTodoComponent } from './new-todo.component'

describe('NewTodoComponent', () => {
  let spectator: Spectator<NewTodoComponent>
  const createComponent = createComponentFactory({
    component: NewTodoComponent,
    providers: [
      mockProvider(RxState),
      mockProvider(TodosFacadeService, {
        createTodo: mockObservable(() => void 0),
      }),
    ],
  })

  it('should create', () => {
    spectator = createComponent()

    expect(spectator.component).toBeTruthy()
  })

  it('should output data when saved', (done) => {
    spectator = createComponent()

    spectator.component.title = 'Buy Milk'
    spectator.component.description = 'And eggs'

    spectator.component.createTodo.subscribe((data) => {
      expect(data).toEqual({ title: 'Buy Milk', description: 'And eggs' })
      done()
    })

    spectator.component.save()
  })
})
