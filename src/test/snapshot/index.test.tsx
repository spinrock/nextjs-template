/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Provider } from 'react-redux'
import IndexPage from '../../../app/page'
import store from '../../app/store/rootStore'
import { render } from '../testUtils'

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
