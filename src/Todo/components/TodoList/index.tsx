import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/app/store';
import { Todo } from '@/entities/task/model/interface';
import { TaskFilter } from '@/features/filterTask/ui'; 
import { TaskCard } from '@/entities/task/ui';

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
      <TaskFilter filterState={filterState} callbackOnChengeFunction={callbackFilterState} />
      {viewTodoList.map((todo) => (
        <TaskCard key={todo.id} todo={todo} />
      ))}
    </>
  )
}

export default TodoList
