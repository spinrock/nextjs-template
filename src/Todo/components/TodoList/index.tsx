import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../rootReducer'
import { Todo } from '../../interface'
import TodoFilter from './components/TodoFilter'
import TodoItem from './components/TodoItem'

const TodoList: React.FC = () => {
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
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  )
}

export default TodoList
