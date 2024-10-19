import type { Meta } from '@storybook/react';
import type { TStory } from '@/core/utils/types/story';
import type { IBaseButtonProps } from '@/core/components/BaseButton/types/types';
import { BaseButton } from '@/core/components/BaseButton';
import { fn } from '@storybook/test';

type TStoryButton = TStory<IBaseButtonProps>;

const meta = {
  component: BaseButton,
  title: 'Storybook/@ui-core/BaseButton',
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
} satisfies Meta<IBaseButtonProps>;

export const Small: TStoryButton = { args: { size: 'sm' } };

export const Medium: TStoryButton = { args: { size: 'md' } };

export const Large: TStoryButton = { args: { size: 'lg' } };

export const Primary: TStoryButton = { args: { variant: 'primary' } };

export const Secondary: TStoryButton = { args: { variant: 'secondary' } };

export const Outlined: TStoryButton = { args: { variant: 'outlined' } };

export const Link: TStoryButton = { args: { variant: 'link' } };

export const Disabled: TStoryButton = { args: { variant: 'primary', disabled: true } };

export default meta;
