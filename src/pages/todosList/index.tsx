'use client'

import React from 'react'
import { AddTodoBtn } from '@/features/createTodo/ui'
import { TodosList } from '@/widget/todosList'

const IndexPage: React.FC = () => (
  <div className="md:mx-36 mx-4">
    <TodosList />
    <AddTodoBtn />
  </div>
)

export default IndexPage
