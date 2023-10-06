import { Switcher } from './Switcher';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switcher> = {
  title: 'Switcher',
  component: Switcher,
};

export default meta;
type Story = StoryObj<typeof Switcher>;

export const Index: Story = {
  args: {
    checked: false,
  },
};
