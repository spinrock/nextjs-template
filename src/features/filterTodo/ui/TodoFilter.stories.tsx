import type { Meta, StoryObj } from '@storybook/nextjs';
import { Provider } from 'react-redux';
import { rootStore } from '@/app/store';
import { TodoFilter } from '@/features/filterTodo/ui';

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
  decorators: [(story) => <Provider store={rootStore}>{story()}</Provider>],
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
