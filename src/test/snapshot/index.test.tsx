/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '../testUtils'
import IndexPage from '../../app/page'
import { Provider } from 'react-redux'
import store from '../../rootStore'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <IndexPage />
      </Provider>,
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
