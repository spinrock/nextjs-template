import type { Meta, StoryObj } from '@storybook/nextjs';
import { Provider } from 'react-redux';
import { rootStore } from '@/app/store';
import { Todo } from '@/entities/todo/model';
import { TodoCard } from '@/entities/todo/ui';

const meta: Meta<typeof TodoCard> = {
  title: 'Todo/TodoCard',
  component: TodoCard,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [(story) => <Provider store={rootStore}>{story()}</Provider>],
}

export default meta
type Story = StoryObj<typeof TodoCard>

const dummyTodo: Todo = {
  id: 'Dummy Id',
  title: 'Dummy Title',
  description: 'Dummy Description',
  completed: false,
  parentTodoId: null,
  childrenTodoIds: [],
}

export const Default: Story = {
  args: {
    todo: dummyTodo,
  },
}

export const Completed: Story = {
  args: {
    todo: { ...dummyTodo, completed: true },
  },
}
