'use client'

import { Provider } from 'react-redux'
import store from '../../src/rootStore'

type ReduxProviderProps = React.PropsWithChildren

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }: ReduxProviderProps) => (
  <Provider store={store}>{children}</Provider>
)

export default ReduxProvider
