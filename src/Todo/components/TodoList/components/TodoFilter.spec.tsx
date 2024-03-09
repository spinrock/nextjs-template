/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../../rootStore'
import { render, screen } from '../../../../test/testUtils'
import TodoFilter from './TodoFilter'

const mockCallbackOnChengeFunction = jest.fn()

describe('Common Test', () => {
  it('Check Select Button Title (filterState null)', () => {
    render(
      <Provider store={store}>
        <TodoFilter filterState={null} callbackOnChengeFunction={mockCallbackOnChengeFunction} />
      </Provider>,
    )

    const expectedSelectButtonTitle = 'ALL'
    expect(screen.getByTestId('select-button-title').innerHTML).toEqual(expectedSelectButtonTitle)
  })

  it('Check Select Button Title (filterState false)', () => {
    render(
      <Provider store={store}>
        <TodoFilter filterState={false} callbackOnChengeFunction={mockCallbackOnChengeFunction} />
      </Provider>,
    )

    const expectedSelectButtonTitle = 'Incompleted'
    expect(screen.getByTestId('select-button-title').innerHTML).toEqual(expectedSelectButtonTitle)
  })

  it('Check Select Button Title (filterState true)', () => {
    render(
      <Provider store={store}>
        <TodoFilter filterState={true} callbackOnChengeFunction={mockCallbackOnChengeFunction} />
      </Provider>,
    )

    const expectedSelectButtonTitle = 'Completed'
    expect(screen.getByTestId('select-button-title').innerHTML).toEqual(expectedSelectButtonTitle)
  })
})
