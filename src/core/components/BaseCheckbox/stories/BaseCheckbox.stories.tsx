import { BaseCheckbox } from '@/core/components/BaseCheckbox';
import { IBaseCheckboxProps } from '@/core/components/BaseCheckbox/types/types';
import { TStory } from '@/core/utils/types/story';
import { fn } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';

type TStoryBaseCheckbox = TStory<IBaseCheckboxProps>;

const onToggle = ({ args }) => {
  action('toggle')({ target: { checked: !args.checked } });
};

const meta: Meta<IBaseCheckboxProps> = {
  component: BaseCheckbox,
  title: 'Storybook/@ui-core/BaseCheckbox',
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Displays a UI Checkbox component',
  },
  args: {
    onChange: action('toggle'),
  },
};

export const DefaultCheckbox: TStoryBaseCheckbox = {
  args: { checked: false },
  play: async ({ args }) => {
    action('toggle')({ target: { checked: !args.checked } });
  },
};

export const CheckboxChecked: TStoryBaseCheckbox = { args: { checked: true } };

export const DisabledCheckbox: TStoryBaseCheckbox = { args: { disabled: true } };

export const DisabledCheckedCheckbox: TStoryBaseCheckbox = {
  args: { disabled: true, checked: true },
};

export const InvalidCheckbox: TStoryBaseCheckbox = { args: { invalid: true } };

export default meta;
