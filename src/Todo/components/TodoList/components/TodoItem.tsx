import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import theme from '../../../../styles/theme'
import { Todo } from '../../../interface'

const useStyles = makeStyles({
  todoItem: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: theme.spacing(10),
  },
})

type Props = {
  todo: Todo
}

const TodoItem: React.FC<Props> = ({ todo }: Props) => {
  const classes = useStyles()

  return (
    <Card className={classes.todoItem}>
      <CardContent>
        <Typography variant="h5">{todo.title}</Typography>
        <Typography variant="body1">{todo.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default TodoItem
