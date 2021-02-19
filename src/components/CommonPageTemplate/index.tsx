import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import theme from '../../styles/theme'
import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles({
  container: {
    padding: 0,
  },
  main: {
    paddingTop: theme.spacing(7.5), // padding AppBar Space
  },
})

const CommonPageTemplate: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Header title="This is Next.js Template" />
      <Box m={0} className={classes.main}>
        {children}
      </Box>
      <Footer />
    </Container>
  )
}

export default CommonPageTemplate
