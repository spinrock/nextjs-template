import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '@/rootStore';
import { TaskFilter } from '@/features/filterTask/ui';

const meta: Meta<typeof TaskFilter> = {
  title: 'Todo/TaskFilter',
  component: TaskFilter,
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
type Story = StoryObj<typeof TaskFilter>

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
