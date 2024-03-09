import { configureStore } from '@reduxjs/toolkit'
import { TodoState } from './Todo/store'
import reducer from './rootReducer'

export type StoreState = {
  todo: TodoState
}

const store = configureStore({ reducer: reducer })

export default store
