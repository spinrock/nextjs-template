/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '../../../test/testUtils'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../../../rootStore'
import TodoList from './index'
import { Todo } from '../../interface'

describe('Common Test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    )
  })

  it('Check TodoList Length', () => {
    expect(screen.getAllByTestId('todoitem-card').length).toEqual(
      store.getState().todo.length,
    )
  })

  it.each(store.getState().todo)('', (todo: Todo) => {
    const expectedTitle = todo.title
    const expectedDescription = todo.description

    expect(screen.getByTestId(`todoitem-title-${todo.id}`).innerHTML).toEqual(
      expectedTitle,
    )
    expect(
      screen.getByTestId(`todoitem-description-${todo.id}`).innerHTML,
    ).toEqual(expectedDescription)
  })
})

describe('Checked Todo Test', () => {
  const targetCheckboxId = `todoitem-checkbox-${store.getState().todo[0].id}`

  beforeEach(async () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    )
    await userEvent.click(
      screen
        .getByTestId(targetCheckboxId)
        .querySelector("input[type='checkbox']"),
    )
  })

  it('Check TodoList Length', async () => {
    expect(screen.getAllByTestId('todoitem-card').length).toEqual(
      store.getState().todo.length - 1,
    )

    await userEvent.click(screen.getByText('Incompleted'))
    await userEvent.click(screen.getByText('ALL'))
    await userEvent.click(
      screen
        .getByTestId(targetCheckboxId)
        .querySelector("input[type='checkbox']"),
    )
  })

  it('Update Filter(Imcompleted -> ALL)', async () => {
    await userEvent.click(screen.getByText('Incompleted'))
    await userEvent.click(screen.getByText('ALL'))

    expect(screen.getAllByTestId('todoitem-card').length).toEqual(
      store.getState().todo.length,
    )

    await userEvent.click(
      screen
        .getByTestId(targetCheckboxId)
        .querySelector("input[type='checkbox']"),
    )
  })

  it('Update Filter(Imcompleted -> Completed)', async () => {
    await userEvent.click(screen.getByText('Incompleted'))
    await userEvent.click(screen.getByText('Completed'))

    expect(screen.getAllByTestId('todoitem-card').length).toEqual(
      store.getState().todo.length - 3,
    )

    await userEvent.click(screen.getAllByText('Completed')[0])
    await userEvent.click(screen.getByText('ALL'))
    await userEvent.click(
      screen
        .getByTestId(targetCheckboxId)
        .querySelector("input[type='checkbox']"),
    )
  })
})

describe('Delete Todo Test', () => {
  const targetDeleteButtonId = `todoitem-delete-button-${store.getState().todo[0].id}`

  it('Check TodoList Length', async () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    )
    await userEvent.click(screen.getByTestId(targetDeleteButtonId))

    // Check Delete Todo not found(default filter state)
    expect(screen.queryByTestId(targetDeleteButtonId)).toBeNull()

    // Check Delete Todo not found(ALL filter state)
    await userEvent.click(screen.getAllByText('Incompleted')[0])
    await userEvent.click(screen.getByText('ALL'))

    expect(screen.queryByTestId(targetDeleteButtonId)).toBeNull()

    // Check Delete Todo not found(Completed filter state)
    await userEvent.click(screen.getAllByText('ALL')[0])
    await userEvent.click(screen.getByText('Completed'))

    expect(screen.queryByTestId(targetDeleteButtonId)).toBeNull()
  })
})
