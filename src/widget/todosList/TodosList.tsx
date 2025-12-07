import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/app/store'
import type { Todo } from '@/entities/todo/model/interface'
import { TodoCard } from '@/entities/todo/ui'
import { TodoFilter } from '@/features/filterTodo/ui'

const TodosList: React.FC = () => {
  const [filterState, setFilterState] = useState<boolean | null>(false)
  const todoList: Todo[] = useSelector((state: RootState) => state.todo)
  const viewTodoList =
    filterState != null ? todoList.filter((todo) => todo.completed === filterState) : todoList

  const callbackFilterState = (state: boolean | null) => {
    setFilterState(state)
  }

  return (
    <>
      <TodoFilter filterState={filterState} callbackOnChengeFunction={callbackFilterState} />
      {viewTodoList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </>
  )
}

export default TodosList
