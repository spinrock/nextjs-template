'use client';

import React from 'react';
import { TasksList } from '@/widget/tasksList';
import AddTodoBtn from '../../Todo/components/AddTodoBtn';

const IndexPage: React.FC = () => (
  <div className="md:mx-36 mx-4">
    <TasksList />
    <AddTodoBtn />
  </div>
);

export default IndexPage;
