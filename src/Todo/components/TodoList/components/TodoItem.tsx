import React from 'react'
import { useDispatch } from 'react-redux'
import CheckBox from '@mui/material/Checkbox'
import { MdDelete } from 'react-icons/md'
import { Todo } from '../../../interface'
import { toggleTodo, deleteTodo } from '../../../reducer'

type Props = {
  todo: Todo
}

const TodoItem: React.FC<Props> = ({ todo }: Props) => {
  const dispatch = useDispatch()

  const toggleTodoFunc = () => {
    dispatch(toggleTodo({ id: todo.id }))
  }

  const deleteTodoFunc = () => {
    dispatch(deleteTodo({ id: todo.id }))
  }

  return (
    <div className="flex my-2 h-20 shadow-md" data-testid="todoitem-card">
      <CheckBox
        checked={todo.completed}
        onChange={toggleTodoFunc}
        data-testid={`todoitem-checkbox-${todo.id}`}
      />
      <div className="flex-1 py-3">
        <p
          className={`text-2xl ${todo.completed ? 'line-through' : 'no-underline'}`}
          data-testid={`todoitem-title-${todo.id}`}
        >
          {todo.title}
        </p>
        <p
          className={`${todo.completed ? 'line-through' : 'no-underline'}`}
          data-testid={`todoitem-description-${todo.id}`}
        >
          {todo.description}
        </p>
      </div>
      <button
        type="button"
        onClick={deleteTodoFunc}
        data-testid={`todoitem-delete-button-${todo.id}`}
        className="px-3 hover:bg-slate-200 hover-text-slate-600 rounded-full"
      >
        <MdDelete className="size-6 text-slate-500" />
      </button>
    </div>
  )
}

export default TodoItem
