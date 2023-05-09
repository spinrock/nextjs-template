/** @jsxImportSource @emotion/react */
"use client";

import React from 'react';
import Container from '@mui/material/Container';
import TodoList from '../src/Todo/components/TodoList';
import AddTodoBtn from '../src/Todo/components/AddTodoBtn';

const Page: React.FC = () => (
	<Container>
		<TodoList />
		<AddTodoBtn />
	</Container>
);

export default Page;
