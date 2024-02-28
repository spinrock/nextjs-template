'use client'

import React from 'react'
import TodoList from '../Todo/components/TodoList'
import AddTodoBtn from '../Todo/components/AddTodoBtn'

const IndexPage: React.FC = () => (
  <div className="md:mx-36 mx-4">
    <TodoList />
    <AddTodoBtn />
  </div>
)

export default IndexPage
