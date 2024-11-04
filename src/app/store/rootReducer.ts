import { combineReducers } from 'redux';
import todoReducer from '@/Todo/reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
