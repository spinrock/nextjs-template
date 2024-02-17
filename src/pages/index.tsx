import React from 'react'
import TodoList from '../Todo/components/TodoList'
import AddTodoBtn from '../Todo/components/AddTodoBtn'

const Home: React.FC = () => {
  return (
    <div className="mx-36">
      <TodoList />
      <AddTodoBtn />
    </div>
  )
}

export default Home
