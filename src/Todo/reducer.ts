import { createSlice } from '@reduxjs/toolkit'
import { Todo } from './interface';

const initialState:Todo[] = []

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const { id, title, description } = action.payload
      // createSliceがImmerのラップ関数のため、mutableな関数を実行しても問題ない
      state.push({ id, title, description, completed: false, parentTaskId: null, childrenTaskIds:[] })
    },
    deleteTodo(state, action) {

    },
    updateTodo(state, action) {

    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { addTodo, deleteTodo, updateTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer