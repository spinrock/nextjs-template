import React from 'react'
import { useDispatch } from 'react-redux'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { addTodo } from '../../reducer'

const AddTodoBtn: React.FC = () => {
  const dispatch = useDispatch()

  const addTodoFunc = () => {
    dispatch(addTodo({ title: 'test' }))
  }

  return (
    <Fab
      color="primary"
      variant="extended"
      aria-label="add"
      onClick={addTodoFunc}
    >
      <AddIcon />
    </Fab>
  )
}

export default AddTodoBtn
