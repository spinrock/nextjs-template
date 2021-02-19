import React from 'react'
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List'
import { Todo } from '../../interface'
import TodoItem from './components/TodoItem'

const TodoList: React.FC = () => {
  const todoList: Todo[] = useSelector((state) => state.todo)

  return (
    <List>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  )
}

export default TodoList
