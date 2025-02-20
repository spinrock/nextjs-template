import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import type { Todo } from '@/entities/todo/model';
import { sampleTodoList } from '@/entities/todo/model/mocks/sampleTodo';

const initialState: Todo[] = sampleTodoList;

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const { title, description } = action.payload
      // createSliceがImmerのラップ関数のため、mutableな関数を実行しても問題ない
      state.push({
        id: v4(),
        title,
        description,
        completed: false,
        parentTodoId: null,
        childrenTodoIds: [],
      })
    },
    deleteTodo(state, action) {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload.id)
      if (todoIndex >= 0) {
        state.splice(todoIndex, 1)
      }
    },
    updateTodo(state, action) {
      const { id, title, description, parentTodoId, childrenTodoIds } = action.payload
      const todo = state.find((todo) => todo.id === id)
      if (todo) {
        todo.title = title ? title : todo.title
        todo.description = description ? description : todo.description
        todo.parentTodoId = parentTodoId || parentTodoId === null ? parentTodoId : todo.parentTodoId
        todo.childrenTodoIds = childrenTodoIds ? childrenTodoIds : todo.childrenTodoIds
      }
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
