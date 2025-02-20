'use client';

import React from 'react';
import { TodosList } from '@/widget/todosList';
import { AddTodoBtn } from '@/features/createTodo/ui';

const IndexPage: React.FC = () => (
  <div className="md:mx-36 mx-4">
    <TodosList />
    <AddTodoBtn />
  </div>
);

export default IndexPage;
