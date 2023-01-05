/**
 * @jest-environment jsdom
 */
import { render, screen } from '../../../../test/testUtils';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../../rootStore';
import TodoItem from './TodoItem';
import { Todo } from '../../../interface';

const dummyTodo:Todo = {
  id: 'Dummy Id',
  title: 'Dummy Title',
  description: 'Dummy Description',
  completed: false,
  parentTaskId: null,
  childrenTaskIds: [],
}

describe('Common Test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoItem todo={dummyTodo} />
      </Provider>
    );
  });

  it('Check Todo Title', () => {
    const expectedTitle = dummyTodo.title;
    expect(screen.getByTestId('todoitem-title').innerHTML).toEqual(expectedTitle);
  });

  it('Check Todo Title Style', () => {
    const expectedTitleStyle = "textDecorationLine: blink";
    expect(screen.getByTestId('todoitem-title')).toHaveStyle(expectedTitleStyle);
  });

  it('Check Todo Description', () => {
    const expectedDescription = dummyTodo.description;
    expect(screen.getByTestId('todoitem-description').innerHTML).toEqual(expectedDescription);
  });

  it('Check Todo Description Style', () => {
    const expectedDescriptionStyle = "textDecorationLine: blink";
    expect(screen.getByTestId('todoitem-description')).toHaveStyle(expectedDescriptionStyle);
  });
});

describe('Completed Todo Test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoItem todo={{...dummyTodo, completed: true}} />
      </Provider>
    );
  });

  it('Check Todo Title Style', () => {
    const expectedTitleStyle = "textDecorationLine: line-through";
    expect(screen.getByTestId('todoitem-title')).toHaveStyle(expectedTitleStyle);
  });

  it('Check Todo Description', () => {
    const expectedTitle = dummyTodo.description;
    expect(screen.getByTestId('todoitem-description').innerHTML).toEqual(expectedTitle);
  });

  it('Check Todo Description Style', () => {
    const expectedDescriptionStyle = "textDecorationLine: line-through";
    expect(screen.getByTestId('todoitem-description')).toHaveStyle(expectedDescriptionStyle);
  });
});