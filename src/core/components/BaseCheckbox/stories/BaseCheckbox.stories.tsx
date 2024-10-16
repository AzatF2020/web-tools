import { useState } from 'react';
import { BaseCheckbox } from '@/core/components/BaseCheckbox';
import { IBaseCheckboxProps } from '@/core/components/BaseCheckbox/types/types';
import { TStory } from '@/core/utils/types/story';
import type { Meta } from '@storybook/react';

type TStoryBaseCheckbox = TStory<IBaseCheckboxProps>;

const RenderBaseCheckbox = (props: IBaseCheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(props.checked ?? false);

  return (
    <BaseCheckbox
      {...props}
      checked={checked}
      onChange={() => setChecked((isChecked) => (isChecked = !isChecked))}
    />
  );
};

const meta = {
  component: RenderBaseCheckbox,
  title: 'Storybook/@ui-core/BaseCheckbox',
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Displays a UI Checkbox component',
  },
  args: {
    type: 'checkbox',
    invalid: false,
    disabled: false,
    checked: false,
    className: '',
  },
} satisfies Meta<IBaseCheckboxProps>;

export const Default: TStoryBaseCheckbox = {
  args: { checked: false },
};

export const Checked: TStoryBaseCheckbox = { args: { checked: true } };

export const Disabled: TStoryBaseCheckbox = { args: { disabled: true } };

export const DisabledChecked: TStoryBaseCheckbox = { args: { disabled: true, checked: true } };

export const Invalid: TStoryBaseCheckbox = { args: { invalid: true } };

export default meta;
