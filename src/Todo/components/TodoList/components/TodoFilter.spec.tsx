/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '../../../../test/testUtils';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../../rootStore';
import TodoFilter from './TodoFilter';

const mockCallbackOnChengeFunction = jest.fn()

describe('Common Test', () => {
  it('Check Select Button Title (filterState null)', () => {
    render(
      <Provider store={store}>
        <TodoFilter filterState={null}  callbackOnChengeFunction = {mockCallbackOnChengeFunction}/>
      </Provider>
    );

    const expectedSelectButtonTitle = 'ALL';
    expect(screen.getByRole('combobox').innerHTML).toEqual(expectedSelectButtonTitle);
  });

  it('Check Select Button Title (filterState false)', () => {
    render(
      <Provider store={store}>
        <TodoFilter filterState={false}  callbackOnChengeFunction = {mockCallbackOnChengeFunction}/>
      </Provider>
    );

    const expectedSelectButtonTitle = 'Incompleted';
    expect(screen.getByRole('combobox').innerHTML).toEqual(expectedSelectButtonTitle);
  });

  it('Check Select Button Title (filterState true)', () => {
    render(
      <Provider store={store}>
        <TodoFilter filterState={true}  callbackOnChengeFunction = {mockCallbackOnChengeFunction}/>
      </Provider>
    );

    const expectedSelectButtonTitle = 'Completed';
    expect(screen.getByRole('combobox').innerHTML).toEqual(expectedSelectButtonTitle);
  });
});