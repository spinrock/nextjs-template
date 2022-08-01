import * as React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CommonPageTemplate from '../components/CommonPageTemplate'
import theme from '../styles/theme'
import store from '../rootStore'
import PropTypes from 'prop-types'
import CssBaseline from '@mui/material/CssBaseline'

export default function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Next.js Template(TodoList)</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <CommonPageTemplate>
            <Component {...pageProps} />
          </CommonPageTemplate>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
