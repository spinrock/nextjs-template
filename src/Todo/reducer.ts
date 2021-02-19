import { createSlice } from '@reduxjs/toolkit'
import { Todo } from './interface'
import { sampleTodoList } from './sampleData'

const initialState: Todo[] = sampleTodoList

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const { id, title, description } = action.payload
      // createSliceがImmerのラップ関数のため、mutableな関数を実行しても問題ない
      state.push({
        id,
        title,
        description,
        completed: false,
        parentTaskId: null,
        childrenTaskIds: [],
      })
    },
    deleteTodo(state, action) {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload.id)
      if (todoIndex >= 0) {
        state.splice(todoIndex, 1)
      }
    },
    updateTodo(state, action) {
      const {
        id,
        title,
        description,
        parentTaskId,
        childrenTaskIds,
      } = action.payload
      const todo = state.find((todo) => todo.id === id)
      if (todo) {
        todo.title = title ? title : todo.title
        todo.description = description ? description : todo.description
        todo.parentTaskId =
          parentTaskId || parentTaskId === null
            ? parentTaskId
            : todo.parentTaskId
        todo.childrenTaskIds = childrenTaskIds
          ? childrenTaskIds
          : todo.childrenTaskIds
      }
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodo,
} = todosSlice.actions

export default todosSlice.reducer
