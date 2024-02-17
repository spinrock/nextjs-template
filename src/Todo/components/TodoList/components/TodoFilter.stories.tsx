import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import store from '../../../../rootStore'
import TodoFilter from './TodoFilter'

const meta: Meta<typeof TodoFilter> = {
  title: 'Todo/TodoFilter',
  component: TodoFilter,
  tags: ['autodocs'],
  argTypes: {
    filterState: {
      options: [null, true, false],
      control: { type: 'radio' },
    },
  },
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
}

export default meta
type Story = StoryObj<typeof TodoFilter>

export const Default: Story = {
  args: {
    filterState: null,
  },
}

export const Incompleted: Story = {
  args: {
    filterState: false,
  },
}

export const Completed: Story = {
  args: {
    filterState: true,
  },
}
