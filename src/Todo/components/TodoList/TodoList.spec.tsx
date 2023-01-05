/**
 * @jest-environment jsdom
 */
import { render, screen } from '../../../test/testUtils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../rootStore';
import TodoList from './index';
import { Todo } from '../../interface';


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

  it.each(store.getState().todo)("", (todo:Todo) => {
    const expectedTitle = todo.title;
    const expectedDescription = todo.description;

    expect(screen.getByTestId(`todoitem-title-${todo.id}`).innerHTML).toEqual(expectedTitle);
    expect(screen.getByTestId(`todoitem-description-${todo.id}`).innerHTML).toEqual(expectedDescription);
  });

  it('Disable Checked Todo', async () => {
    const targetCheckboxId = `todoitem-checkbox-${store.getState().todo[0].id}`;

    expect(screen.getByTestId(targetCheckboxId)).not.toBeChecked();
    await userEvent.click(screen.getByTestId(targetCheckboxId).querySelector("input[type='checkbox']"));

    expect(screen.queryByTestId(targetCheckboxId)).toBeNull();
  });
});