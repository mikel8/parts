import { Observable } from 'rxjs'
import { Todo } from './types'

export type CreateTodo = Omit<Todo, 'uuid'>

export class TodoNotFoundError extends Error {}

export abstract class TodosAdapterService {
  abstract getTodos(): Observable<Todo[]>

  abstract getTodoByUuid(uuid: string): Observable<Todo | null>

  abstract createTodo(todo: CreateTodo): Observable<Todo>

  abstract deleteTodo(uuid: string): Observable<void>

  /**
   * @throws TodoNotFoundError
   */
  abstract updateTodo(todo: Todo): Observable<Todo>
}