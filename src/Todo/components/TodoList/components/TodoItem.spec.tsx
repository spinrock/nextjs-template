/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '../../../../test/testUtils'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../../../rootStore'
import TodoItem from './TodoItem'
import { Todo } from '../../../interface'

const dummyTodo: Todo = {
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
      </Provider>,
    )
  })

  it('Check Todo Title', () => {
    const expectedTitle = dummyTodo.title
    expect(
      screen.getByTestId(`todoitem-title-${dummyTodo.id}`).innerHTML,
    ).toEqual(expectedTitle)
  })

  it('Check Todo Title Style', () => {
    const expectedTitleStyle = 'textDecorationLine: blink'
    expect(screen.getByTestId(`todoitem-title-${dummyTodo.id}`)).toHaveStyle(
      expectedTitleStyle,
    )
  })

  it('Check Todo Description', () => {
    const expectedDescription = dummyTodo.description
    expect(
      screen.getByTestId(`todoitem-description-${dummyTodo.id}`).innerHTML,
    ).toEqual(expectedDescription)
  })

  it('Check Todo Description Style', () => {
    const expectedDescriptionStyle = 'textDecorationLine: blink'
    expect(
      screen.getByTestId(`todoitem-description-${dummyTodo.id}`),
    ).toHaveStyle(expectedDescriptionStyle)
  })
})

describe('Completed Todo Test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoItem todo={{ ...dummyTodo, completed: true }} />
      </Provider>,
    )
  })

  it('Check Todo Title Style', () => {
    const expectedTitleStyle = 'textDecorationLine: line-through'
    expect(screen.getByTestId(`todoitem-title-${dummyTodo.id}`)).toHaveStyle(
      expectedTitleStyle,
    )
  })

  it('Check Todo Description Style', () => {
    const expectedDescriptionStyle = 'textDecorationLine: line-through'
    expect(
      screen.getByTestId(`todoitem-description-${dummyTodo.id}`),
    ).toHaveStyle(expectedDescriptionStyle)
  })
})
