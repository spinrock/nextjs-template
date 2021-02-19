import React from 'react'
import Container from '@material-ui/core/Container'
import Header from './Header'
import Footer from './Footer'

const CommonPageTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <Header title="This is Next.js Template" />
      {children}
      <Footer />
    </Container>
  )
}

export default CommonPageTemplate
