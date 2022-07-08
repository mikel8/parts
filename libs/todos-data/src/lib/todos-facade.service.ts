import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CreateTodoDto, TodosAdapterService } from './todos-adapter.service'
import { TodosDataService } from './todos-data.service'
import { todos$ } from './todos.repository'
import { Todo } from './types'

@Injectable({
  providedIn: 'root',
})
export class TodosFacadeService {
  todos$ = todos$

  constructor(
    private todosAdapter: TodosAdapterService,
    private todosData: TodosDataService
  ) {}

  getTodos(): Observable<Todo[]> {
    return this.todosData.getTodos()
  }

  getTodoByUuid(uuid: Todo['uuid']): Observable<Todo | null> {
    return this.todosAdapter.getTodoByUuid(uuid)
  }

  createTodo(data: CreateTodoDto): Observable<Todo> {
    const todo$ = this.todosData.createTodo(data)

    todo$.subscribe()

    return todo$
  }

  deleteTodo(uuid: Todo['uuid']): Observable<void> {
    const result$ = this.todosData.deleteTodo(uuid)

    result$.subscribe()

    return result$
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const todo$ = this.todosAdapter.updateTodo(todo)

    todo$.subscribe()

    return todo$
  }

  updateTodoStatus(
    uuid: Todo['uuid'],
    status: Todo['status']
  ): Observable<Todo> {
    const todo$ = this.todosData.updateTodoStatus(uuid, status)

    todo$.subscribe()

    return todo$
  }
}
