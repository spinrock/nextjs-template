import { configureStore } from '@reduxjs/toolkit'
import reducer from './rootReducer'
import { TodoState } from './Todo/store'

export type StoreState = {
  todo: TodoState
}

const store = configureStore({ reducer: reducer })

export default store
