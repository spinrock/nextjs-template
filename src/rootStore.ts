import 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './rootReducer'
import { TodoState } from './Todo/store'

export type StoreState = {
  todo: TodoState
}

declare module 'react-redux' {
  interface DefaultRootState extends StoreState {}
}

const store = configureStore({ reducer: reducer })

export default store
