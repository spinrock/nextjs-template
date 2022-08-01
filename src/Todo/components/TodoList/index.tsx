import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import { Todo } from '../../interface';
import TodoFilter from './components/TodoFilter';
import TodoItem from './components/TodoItem';

const TodoList: React.FC = () => {
  const [filterState, setFilterState] = useState(false);
  const todoList: Todo[] = useSelector((state) => state.todo);
  const viewTodoList =
    filterState != null
      ? todoList.filter((todo) => todo.completed === filterState)
      : todoList;

  const callbackFilterState = (state: boolean) => {
    setFilterState(state)
  };

  return (
    <List>
      <TodoFilter
        filterState={filterState}
        callbackOnChengeFunction={callbackFilterState}
      />
      {viewTodoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
}

export default TodoList;
