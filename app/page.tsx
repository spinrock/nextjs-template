'use client'

import React from 'react'
import AddTodoBtn from '../src/Todo/components/AddTodoBtn'
import TodoList from '../src/Todo/components/TodoList'

const IndexPage: React.FC = () => (
  <div className="md:mx-36 mx-4">
    <TodoList />
    <AddTodoBtn />
  </div>
)

export default IndexPage
