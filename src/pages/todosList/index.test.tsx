/**
 * @jest-environment jsdom
 */

import { Provider } from 'react-redux'
import { rootStore } from '@/app/store'
import IndexPage from '@/pages/todosList'
import { render } from '@/shared/tests/testUtils'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={rootStore}>
        <IndexPage />
      </Provider>,
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
