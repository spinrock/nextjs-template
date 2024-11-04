import { configureStore } from '@reduxjs/toolkit'
import { TodoState } from '../../Todo/store'
import { rootReducer } from './rootReducer';

export type StoreState = {
  todo: TodoState
}

const store = configureStore({ reducer: rootReducer })

export default store
