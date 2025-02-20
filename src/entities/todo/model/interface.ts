export interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
  parentTodoId: string | null
  childrenTodoIds: string[]
}
