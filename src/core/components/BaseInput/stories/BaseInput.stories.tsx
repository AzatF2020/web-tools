import { BaseInput } from '@/core/components/BaseInput';
import { fn } from '@storybook/test';
import type { TStory } from '@/core/utils/types/story';
import type { IBaseInputProps } from '@/core/components/BaseInput/types/types';
import type { Meta } from '@storybook/react';

const meta = {
  component: BaseInput,
  title: 'Storybook/@ui-core/BaseInput',
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Displays a UI Input component with different style variants.',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
  },
  args: {
    type: 'text',
    size: 'md',
    invalid: false,
    onChange: fn(),
    value: 'Some value',
    placeholder: 'Write some text...',
  },
} satisfies Meta<IBaseInputProps>;

export const Small: TStory<IBaseInputProps> = { args: { size: 'sm' } };

export const Medium: TStory<IBaseInputProps> = { args: { size: 'md' } };

export const Large: TStory<IBaseInputProps> = { args: { size: 'lg' } };

export const Invalid: TStory<IBaseInputProps> = { args: { size: 'md', invalid: true } };

export const Disabled: TStory<IBaseInputProps> = { args: { size: 'md', disabled: true } };

export const WithoutValue: TStory<IBaseInputProps> = { args: { size: 'md', value: '' } };

export default meta;
