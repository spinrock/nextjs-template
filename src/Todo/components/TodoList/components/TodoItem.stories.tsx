import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import store from '../../../../rootStore'
import { Todo } from '../../../interface'
import TodoItem from './TodoItem'

const meta: Meta<typeof TodoItem> = {
  title: 'Todo/TodoItem',
  component: TodoItem,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
}

export default meta
type Story = StoryObj<typeof TodoItem>

const dummyTodo: Todo = {
  id: 'Dummy Id',
  title: 'Dummy Title',
  description: 'Dummy Description',
  completed: false,
  parentTaskId: null,
  childrenTaskIds: [],
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
