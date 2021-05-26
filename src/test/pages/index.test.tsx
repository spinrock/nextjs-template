/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '../testUtils'
import Home from '../../pages/index'
import { Provider } from 'react-redux'
import store from '../../rootStore'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
