import React from 'react'
import Container from '@material-ui/core/Container'
import TodoList from '../Todo/components/TodoList'
import AddTodoBtn from '../Todo/components/AddTodoBtn'

const Home: React.FC = () => {
  return (
    <Container>
      <TodoList />
      <AddTodoBtn />
    </Container>
  )
}

export default Home
