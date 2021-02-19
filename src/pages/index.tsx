import React from 'react'
import Container from '@material-ui/core/Container'
import TodoList from '../Todo/components/TodoList'

const Home: React.FC = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  )
}

export default Home
