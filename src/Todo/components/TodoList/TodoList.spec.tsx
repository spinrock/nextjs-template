/**
 * @jest-environment jsdom
 */
import { render, screen } from '../../../test/testUtils';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../rootStore';
import TodoList from './index';


describe('Common Test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });

  it('Check TodoList Length', () => {
    expect(screen.getAllByTestId('todoitem-card').length).toEqual(store.getState().todo.length);
  });
});