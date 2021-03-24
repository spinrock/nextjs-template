import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CheckBox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import theme from '../../../../styles/theme'
import { Todo } from '../../../interface'
import { toggleTodo, deleteTodo } from '../../../reducer'

const useStyles = makeStyles({
  todoItem: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: theme.spacing(10),
    display: 'flex',
  },
  cardContent: {
    width: '90%',
  },
  checkBox: {
    width: '10%',
  },
})

type Props = {
  todo: Todo
}

const TodoItem: React.FC<Props> = ({ todo }: Props) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const toggleTodoFunc = () => {
    dispatch(toggleTodo({ id: todo.id }))
  }

  const deleteTodoFunc = () => {
    dispatch(deleteTodo({ id: todo.id }))
  }

  return (
    <Card className={classes.todoItem}>
      <CheckBox checked={todo.completed} onChange={toggleTodoFunc} />
      <CardActionArea
      >
        <CardContent className={classes.cardContent}>
          <Typography
            variant="h5"
            style={{
              textDecorationLine: todo.completed ? 'line-through' : 'blink',
            }}
          >
            {todo.title}
          </Typography>
          <Typography
            variant="body1"
            noWrap={true}
            style={{
              textDecorationLine: todo.completed ? 'line-through' : 'blink',
            }}
          >
            {todo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton
        onClick={deleteTodoFunc}
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  )
}

export default TodoItem
