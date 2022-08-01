import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CheckBox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
