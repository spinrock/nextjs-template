import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CheckBox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import theme from '../../../../styles/theme';
import { Todo } from '../../../interface';
import { toggleTodo, deleteTodo } from '../../../reducer';

const StyledCard = styled(Card)(() => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  height: theme.spacing(10),
  display: 'flex',
}));

const StyledCardContent = styled(CardContent)(() => ({
  width: '90%',
}));

type Props = {
  todo: Todo
}

const TodoItem: React.FC<Props> = ({ todo }: Props) => {
  const dispatch = useDispatch();

  const toggleTodoFunc = () => {
    dispatch(toggleTodo({ id: todo.id }))
  };

  const deleteTodoFunc = () => {
    dispatch(deleteTodo({ id: todo.id }))
  };

  return (
    <StyledCard>
      <CheckBox checked={todo.completed} onChange={toggleTodoFunc} />
      <CardActionArea>
        <StyledCardContent>
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
        </StyledCardContent>
      </CardActionArea>
      <IconButton
        onClick={deleteTodoFunc}
      >
        <DeleteIcon />
      </IconButton>
    </StyledCard>
  );
}

export default TodoItem;
