import type { Meta, StoryObj } from '@storybook/react';
import type { IButtonProps } from '@/core/components/BaseButton/types/types';
import { BaseButton } from '@/core/components/BaseButton';
import { fn } from '@storybook/test';

type Story = StoryObj<IButtonProps>;

const meta: Meta<IButtonProps> = {
  component: BaseButton,
  title: 'Storybook/@ui-core/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Displays a UI Button component with different style variants.',
  },
  args: {
    type: 'button',
    label: 'Button',
    size: 'md',
    onClick: fn(),
  },
};

export const Primary: Story = { args: { variant: 'primary' } };

export const Secondary: Story = { args: { variant: 'secondary' } };

export const Outlined: Story = { args: { variant: 'outlined' } };

export const Link: Story = { args: { variant: 'link' } };

export default meta;
