"use client";

import { Provider } from 'react-redux';
import store from '../src/rootStore';

const ReduxRegistry = ({
    children,
  }: {
    children: JSX.Element;
  }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxRegistry;