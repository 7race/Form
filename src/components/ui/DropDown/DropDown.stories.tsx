import { Dropdown } from './DropDown';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  title: 'DropDown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Index: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};
