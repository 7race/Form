import { RadioButton } from './RadioButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioButton> = {
  title: 'RadioButton',
  component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Index: Story = {
  args: {
    id: '1',
    label: 'option',
  },
};
