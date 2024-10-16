import { describe, it, expect, vi } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { BaseCheckbox, type IBaseCheckboxProps } from '@/core/components/BaseCheckbox';

const renderCheckbox = (props: IBaseCheckboxProps = {}) => {
  return render(<BaseCheckbox {...props} />);
};

const getCheckmark = (container: HTMLElement): HTMLSpanElement | null => {
  return container.querySelector('.checkbox__checkmark');
};

describe('BaseCheckbox test component', () => {
  it('should render with props', async () => {
    const onChange = vi.fn();
    const { container } = renderCheckbox({
      checked: true,
      invalid: true,
      disabled: false,
      value: 'checkbox testing',
      'aria-checked': false,
      'aria-invalid': false,
      onChange,
    });
    expect(container).toMatchSnapshot();
  });

  it('should render with disabled state and className', () => {
    const { container } = renderCheckbox({ disabled: true });

    const input = screen.getByRole('checkbox');
    const checkmark = getCheckmark(container);

    expect(input).toHaveAttribute('disabled');
    expect(checkmark).toHaveClass('checkbox__checkmark--disabled');
  });

  it('should test onChange function with correct value', async () => {
    const onChange = vi.fn();

    const { getByRole } = renderCheckbox({ onChange });

    const input = getByRole('checkbox');

    expect(input).not.toBeChecked();

    await fireEvent.change(input, { target: { checked: true } });

    expect(input).toBeChecked();
  });

  it('should test with incorrect attribute value', () => {
    const { getByRole } = renderCheckbox({ invalid: true, disabled: true });

    expect(getByRole('checkbox')).not.toHaveAttribute('aria-invalid', false);
    expect(getByRole('checkbox')).not.toHaveAttribute('disabled', false);
  });

  it('should test with new className', () => {
    const { container } = renderCheckbox({ className: 'checkbox-custom-class' });

    expect(getCheckmark(container)).toHaveClass('checkbox-custom-class');
  });
});
